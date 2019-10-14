import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPositionObserver({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPositionObserver 
      class={className}
      {...props}
    />
  )
}

export default AmpPositionObserver
