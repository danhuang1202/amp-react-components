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
    <AmpStickyAd 
      className={className}
      {...props}
    />
  )
}

export default AmpStickyAd
