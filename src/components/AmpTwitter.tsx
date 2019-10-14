import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpTwitter({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpTwitter 
      class={className}
      {...props}
    />
  )
}

export default AmpTwitter
