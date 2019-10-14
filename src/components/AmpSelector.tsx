import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSelector({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpSelector 
      class={className}
      {...props}
    />
  )
}

export default AmpSelector
