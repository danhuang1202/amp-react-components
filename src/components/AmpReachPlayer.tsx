import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpReachPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpReachPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpReachPlayer
