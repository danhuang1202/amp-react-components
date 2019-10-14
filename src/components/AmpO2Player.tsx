import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpO2Player({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpO2Player 
      class={className}
      {...props}
    />
  )
}

export default AmpO2Player
