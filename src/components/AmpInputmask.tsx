import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpInputmask({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpInputmask 
      className={className}
      {...props}
    />
  )
}

export default AmpInputmask
