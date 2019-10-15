import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBodymovinAnimation({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-bodymovin-animation
      class={className}
      {...props}
    />
  )
}

export default AmpBodymovinAnimation
