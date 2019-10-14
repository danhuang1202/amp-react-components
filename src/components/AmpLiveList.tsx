import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpLiveList({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpLiveList 
      class={className}
      {...props}
    />
  )
}

export default AmpLiveList
