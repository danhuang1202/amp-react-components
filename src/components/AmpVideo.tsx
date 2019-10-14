import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVideo({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpVideo 
      class={className}
      {...props}
    />
  )
}

export default AmpVideo
