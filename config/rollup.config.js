import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import alias from 'rollup-plugin-alias'
import pkg from '../package.json'

const fs = require('fs')
const path = require('path')
const extensions = ['.ts', '.tsx']
const exclude = 'node_modules/**'

const entries = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs'
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ],
    plugins: {
      postcss: {
        extract: pkg.style
      }
    }
  }
]

const codegenPath = path.join(__dirname, '../src/components/codegen/')
fs.readdirSync(codegenPath).forEach(filename => {
  entries.push({
    input: `src/components/codegen/${filename}`,
    output: [
      {
        dir: `lib/components`,
        format: 'cjs'
      },
      {
        dir: `es/components`,
        format: 'es'
      }
    ]
  })
})

const scriptPath = path.join(__dirname, '../src/components/script/')
fs.readdirSync(scriptPath).forEach(filename => {
  entries.push({
    input: `src/components/script/${filename}`,
    output: [
      {
        dir: `lib/components`,
        format: 'cjs'
      },
      {
        dir: `es/components`,
        format: 'es'
      }
    ]
  })
})

const options = entries.map(entry => {
  const { input, output } = entry

  return {
    input,
    output,
    plugins: [
      external(),
      commonjs(),
      babel({
        extensions,
        exclude
      }),
      resolve({
        extensions
      }),
      alias({
        resolve: ['.tsx', '.ts', '/index.tsx', '/index.ts'],
        '@components': path.resolve(__dirname, '../src', 'components')
      })
    ]
  }
})

export default options
