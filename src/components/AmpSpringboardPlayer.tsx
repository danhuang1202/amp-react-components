import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSpringboardPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-springboard-player
      class={className}
      {...props}
    />
  )
}

export default AmpSpringboardPlayer
