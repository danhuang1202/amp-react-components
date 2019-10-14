import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function Amp3qPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <Amp3qPlayer 
      class={className}
      {...props}
    />
  )
}

export default Amp3qPlayer
