import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpActionMacro({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpActionMacro 
      class={className}
      {...props}
    />
  )
}

export default AmpActionMacro
