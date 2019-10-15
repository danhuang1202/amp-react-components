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
    <amp-3q-player
      class={className}
      {...props}
    />
  )
}

export default Amp3qPlayer
