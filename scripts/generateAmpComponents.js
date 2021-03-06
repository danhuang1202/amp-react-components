const fs = require('fs-extra')
const path = require('path')
const puppeteer = require('puppeteer')
const EXCLUDE_AMP_COMPONENTS = ['amp-bind', 'amp-animation', 'amp-mustache', 'amp-access', 'amp-analytics']

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

function getComponentName(tag){
  return tag.split('-').map(str => str.replace(/^\w/, letter => letter.toUpperCase())).join('')
}

function generateReactComponent(tag, component) {
  return `import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function ${component}({
  className, ...props
}: Props): ReactElement{
  return (
    <${tag}
      class={className}
      {...props}
    />
  )
}

export default ${component}
`
}

function writeReactComponent(tag) {
  const component = getComponentName(tag)
  const content = generateReactComponent(tag, component)
  const filename = path.resolve(__dirname, `../src/components/view/${component}.tsx`)
  try {
    fs.writeFileSync(filename, content)
  } catch(error) {
    console.error(`[writeReactComponent] write ${filename} failed: ${error}`)
  }
}

function generateIndex() {
  const viewPath = path.join(__dirname, '../src/components/view')
  const viewFilenames = fs.readdirSync(viewPath).map(filename => filename.split('.')[0])
  const utilPath = path.join(__dirname, '../src/components/util')
  const utilFilenames = fs.readdirSync(utilPath).map(filename => filename.split('.')[0])
  
  return `${viewFilenames.map(name => `import ${name} from './components/view/${name}'
`).join('')}${utilFilenames.map(name => `import ${name} from './components/util/${name}'
`).join('')}

export {${viewFilenames.map(name => `
  ${name},`).join('')}${utilFilenames.map(name => `
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

function generateTypeIndex(tags) {  
  return `declare namespace JSX {
  interface IntrinsicElements {${tags.map(name => `
    '${name}': any;`).join('')}
	}
}`
}

function writeTypeIndex(tags) {
  const content = generateTypeIndex(tags)
  const filename = path.resolve(__dirname, `../src/react.ext.d.ts`)
  try {
    fs.writeFileSync(filename, content)
  } catch(error) {
    console.error(`[writeIndex] write src/react.ext.d.ts failed: ${error}`)
  }
}


getAmpComponents().then((components) => {
  const filteredComponents = components.filter(tag => EXCLUDE_AMP_COMPONENTS.indexOf(tag) === -1)
  for (let name of filteredComponents) {
    writeReactComponent(name)
  }
  writeTypeIndex(filteredComponents)
  writeIndex()
})
