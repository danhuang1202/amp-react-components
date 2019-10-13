import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSubscriptions({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpSubscriptions 
      className={className}
      {...props}
    />
  )
}

export default AmpSubscriptions
