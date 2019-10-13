import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpTimeago({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpTimeago 
      className={className}
      {...props}
    />
  )
}

export default AmpTimeago
