import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPanZoom({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPanZoom 
      className={className}
      {...props}
    />
  )
}

export default AmpPanZoom
