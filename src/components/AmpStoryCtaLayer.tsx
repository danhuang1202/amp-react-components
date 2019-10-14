import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryCtaLayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-story-cta-layer
      class={className}
      {...props}
    />
  )
}

export default AmpStoryCtaLayer
