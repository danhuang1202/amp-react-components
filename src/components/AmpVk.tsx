import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVk({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpVk 
      className={className}
      {...props}
    />
  )
}

export default AmpVk
