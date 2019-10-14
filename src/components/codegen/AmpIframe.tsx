import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpIframe({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-iframe
      class={className}
      {...props}
    />
  )
}

export default AmpIframe
