import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpUserLocation({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpUserLocation 
      className={className}
      {...props}
    />
  )
}

export default AmpUserLocation
