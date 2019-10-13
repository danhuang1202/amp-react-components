# amp-react-components
[![Actions Status](https://github.com/danhuang1202/amp-react-components/workflows/Node/badge.svg)](https://github.com/danhuang1202/amp-react-components/actions)
[![NPM version](https://img.shields.io/npm/v/amp-react-components.svg)](https://www.npmjs.com/package/amp-react-components)

Render AMP components with React.
1. Support <a href="https://www.styled-components.com/docs/advanced#existing-css">styled-components</a> by passed-in `className` prop,
and attaches `className` prop to `class` prop of AMP HTML tag duo to React does't support <a href="https://github.com/facebook/react/issues/11347#issuecomment-339830484">custom element attributes</a> now.
2. Render script tag with JSON object inside to support  <a href="https://amp.dev/documentation/components/amp-animation/?format=websites">amp-animation</a> and <a href="https://amp.dev/documentation/components/amp-bind/?format=websites">amp-bind</a>

## Installation
```
npm i amp-react-components
```

## Usage
- Common jS
```js
// import from package entry point
const amp = require('amp-react-components')

  <amp.AmpImg {...props} />
  <amp.AmpLightbox {...props} />
```
```js
// only import specific component
const AmpLightbox = require('amp-react-components/lib/components/AmpLightbox')

  <AmpLightbox {...props} />
```

- ESM
```js
// import from package entry point
import { AmpImg, AmpLightbox } from 'amp-react-components'

  <AmpImg {...props} />
  <AmpLightbox {...props} />
```
```js
// only import specific component
import AspectRatioImg from 'amp-react-components/es/components/AmpLightbox'

  <AmpLightbox {...props} />
```

### CSS Module
```js
// style.css
.img {
  position: relative;
  border-radius: 8px;
  border: solid 1px #e0e4e9;
  box-sizing: border-box;

  > img {
    border-radius: 8px;
  }
}
```

```js
// index.js
import { AmpImg } from 'amp-react-components'
import styles from './style.css'

function Compoment({...}) {
  return (
    <AmpImg
      className ={styles.img}
      src={image}
      width="1"
      height="1"
      layout="responsive"
    />
  )
}
```

### Styled Components
```js
import styled from 'styled-components'
import { AmpImg } from 'amp-react-components'

const StyledAmpImg = styled(AmpImg)`
  position: relative;
  border-radius: 8px;
  border: solid 1px #e0e4e9;
  box-sizing: border-box;

  > img {
    border-radius: 8px;
  }
`
function Compoment({...}) {
  return (
    <StyledAmpImg
      src={image}
      width="1"
      height="1"
      layout="responsive"
    />
  )
}
```

### AMP Component (`AmpState`) with Script Tag
```js
import { AmpImg, AmpState } from 'amp-react-components'

function Compoment({...}) {
  const id = "myAnimals"
  const state = {
    "dog": {
      "imageUrl": "/img/dog.jpg",
      "style": "greenBackground"
    },
    "cat": {
      "imageUrl": "/img/cat.jpg",
      "style": "redBackground"
    }
  }

  return (
    <>
      <AmpState id={id} state={state} />
      <p data-amp-bind-text="'This is a ' + currentAnimal + '.'">This is a dog.</p>
      <p class="greenBackground" data-amp-bind-class="myAnimals[currentAnimal].style">
        Each animal has a different background color.
      </p>
      <AmpImg width="300" height="200" src="/img/dog.jpg" data-amp-bind-src="myAnimals[currentAnimal].imageUrl" />
      <button on="tap:AMP.setState({currentAnimal: 'cat'})">Set to Cat</button>
    </>
  )
}
```