import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMinuteMediaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-minute-media-player
      class={className}
      {...props}
    />
  )
}

export default AmpMinuteMediaPlayer
