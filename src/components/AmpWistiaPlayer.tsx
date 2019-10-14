import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpWistiaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-wistia-player
      class={className}
      {...props}
    />
  )
}

export default AmpWistiaPlayer
