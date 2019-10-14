import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpWebPush({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpWebPush 
      class={className}
      {...props}
    />
  )
}

export default AmpWebPush
