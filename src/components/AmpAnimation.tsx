import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAnimation({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAnimation 
      className={className}
      {...props}
    />
  )
}

export default AmpAnimation
