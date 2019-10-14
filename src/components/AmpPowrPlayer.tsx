import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPowrPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPowrPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpPowrPlayer
