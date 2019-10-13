import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAccess({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAccess 
      className={className}
      {...props}
    />
  )
}

export default AmpAccess
