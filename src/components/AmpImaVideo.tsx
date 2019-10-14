import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpImaVideo({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpImaVideo 
      class={className}
      {...props}
    />
  )
}

export default AmpImaVideo
