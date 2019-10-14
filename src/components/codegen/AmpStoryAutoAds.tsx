import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryAutoAds({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-story-auto-ads
      class={className}
      {...props}
    />
  )
}

export default AmpStoryAutoAds
