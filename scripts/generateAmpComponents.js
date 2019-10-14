const fs = require('fs-extra')
const path = require('path')
const puppeteer = require('puppeteer')
const EXCLUDE_AMP_COMPONENTS = ['amp-bind', 'amp-animation']

async function getAmpComponents() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://amp.dev/documentation/components/')
  const components = await page.$$eval('#ap--sidebar-content a.nav-link', navLinks => 
    navLinks.map(link => link.text)
  )

  await browser.close()

  return components
}

function getComponentName(name){
  return name.split('-').map(str => str.replace(/^\w/, letter => letter.toUpperCase())).join('')
}

function generateReactComponent(name) {
  return `import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function ${name}({
  className, ...props
}: Props): ReactElement{
  return (
    <${name} 
      class={className}
      {...props}
    />
  )
}

export default ${name}
`
}

function writeReactComponent(name) {
  const content = generateReactComponent(name)
  const filename = path.resolve(__dirname, `../src/components/${name}.tsx`)
  try {
    fs.writeFileSync(filename, content)
  } catch(error) {
    console.error(`[writeReactComponent] write ${filename} failed: ${error}`)
  }
}

function generateIndex() {
  const componentPath = path.join(__dirname, '../src/components/')
  const names = fs.readdirSync(componentPath).map(filename => filename.split('.')[0])
  
  return `${names.map(name => `import ${name} from './components/${name}'
`).join('')}

export {${names.map(name => `
  ${name}`).join(',')} 
}
`
}

function writeIndex() {
  const content = generateIndex()
  const filename = path.resolve(__dirname, `../src/index.ts`)
  try {
    fs.writeFileSync(filename, content)
  } catch(error) {
    console.error(`[writeIndex] write src/index.ts failed: ${error}`)
  }
}

getAmpComponents().then((ampComponents) => {
  const components = ampComponents.filter(name => EXCLUDE_AMP_COMPONENTS.indexOf(name) === -1).map(name => getComponentName(name))

  for (let name of components) {
    writeReactComponent(name)
  }

  writeIndex()
})
