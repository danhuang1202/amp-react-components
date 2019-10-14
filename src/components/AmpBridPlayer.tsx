import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBridPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpBridPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpBridPlayer
