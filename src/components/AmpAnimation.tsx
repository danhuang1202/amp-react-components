import React, { ReactElement } from 'react'
import AmpScript from './AmpScript'

type Props = {
  /** id for amp-animation component */
  id: string
  /** A document-scope, mutable JSON animation. */
  animation: object
}

function AmpAnimation({ id, animation }: Props): ReactElement {
  return (
    <AmpScript
      tag="amp-animation"
      attribute={{
        id,
        layout: 'nodisplay'
      }}
      data={animation}
    />
  )
}

export default AmpAnimation
