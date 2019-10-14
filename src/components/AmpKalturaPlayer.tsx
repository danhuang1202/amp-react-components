import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpKalturaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpKalturaPlayer 
      class={className}
      {...props}
    />
  )
}

export default AmpKalturaPlayer
