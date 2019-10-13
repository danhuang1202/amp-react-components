import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMustache({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpMustache 
      className={className}
      {...props}
    />
  )
}

export default AmpMustache
