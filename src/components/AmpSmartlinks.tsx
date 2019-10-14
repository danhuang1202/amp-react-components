import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSmartlinks({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpSmartlinks 
      class={className}
      {...props}
    />
  )
}

export default AmpSmartlinks
