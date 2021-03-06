import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpNexxtvPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-nexxtv-player
      class={className}
      {...props}
    />
  )
}

export default AmpNexxtvPlayer
