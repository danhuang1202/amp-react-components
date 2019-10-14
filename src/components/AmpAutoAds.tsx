import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAutoAds({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-auto-ads
      class={className}
      {...props}
    />
  )
}

export default AmpAutoAds
