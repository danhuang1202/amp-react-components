import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMowplayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-mowplayer
      class={className}
      {...props}
    />
  )
}

export default AmpMowplayer
