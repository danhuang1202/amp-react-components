import React, { ReactElement } from 'react'
import ComponentScript from './ComponentScript'

type Props = {
  /** id for amp-animation component */
  id: string
  /** A document-scope, mutable JSON animation. */
  animation: object
}

function AmpAnimation({ id, animation }: Props): ReactElement {
  const script = React.createElement('script', {
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(animation)
    }
  })
  return React.createElement('amp-animation', {
    id,
    layout: 'nodisplay'
  }, script)
}

export default AmpAnimation
