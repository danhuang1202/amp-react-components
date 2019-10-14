import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMathml({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpMathml 
      class={className}
      {...props}
    />
  )
}

export default AmpMathml
