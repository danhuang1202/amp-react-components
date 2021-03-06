import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpCallTracking({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-call-tracking
      class={className}
      {...props}
    />
  )
}

export default AmpCallTracking
