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
    <AmpStoryAutoAds 
      class={className}
      {...props}
    />
  )
}

export default AmpStoryAutoAds
