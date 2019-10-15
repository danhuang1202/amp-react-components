import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVideoIframe({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-video-iframe
      class={className}
      {...props}
    />
  )
}

export default AmpVideoIframe
