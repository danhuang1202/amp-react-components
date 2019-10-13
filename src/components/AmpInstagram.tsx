import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpInstagram({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpInstagram 
      className={className}
      {...props}
    />
  )
}

export default AmpInstagram
