import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpViqeoPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpViqeoPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpViqeoPlayer
