import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpIzlesene({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-izlesene
      class={className}
      {...props}
    />
  )
}

export default AmpIzlesene
