import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryGridLayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-story-grid-layer
      class={className}
      {...props}
    />
  )
}

export default AmpStoryGridLayer
