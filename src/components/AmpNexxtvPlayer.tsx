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
    <AmpNexxtvPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpNexxtvPlayer
