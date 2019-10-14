import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStickyAd({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-sticky-ad
      class={className}
      {...props}
    />
  )
}

export default AmpStickyAd
