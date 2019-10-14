import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAd({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAd 
      class={className}
      {...props}
    />
  )
}

export default AmpAd
