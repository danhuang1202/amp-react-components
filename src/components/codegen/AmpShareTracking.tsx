import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpShareTracking({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-share-tracking
      class={className}
      {...props}
    />
  )
}

export default AmpShareTracking
