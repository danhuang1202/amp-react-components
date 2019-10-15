import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFont({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-font
      class={className}
      {...props}
    />
  )
}

export default AmpFont
