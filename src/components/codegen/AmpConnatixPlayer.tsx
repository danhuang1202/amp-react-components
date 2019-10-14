import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpConnatixPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-connatix-player
      class={className}
      {...props}
    />
  )
}

export default AmpConnatixPlayer
