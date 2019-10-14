import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpJwplayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpJwplayer 
      class={className}
      {...props}
    />
  )
}

export default AmpJwplayer
