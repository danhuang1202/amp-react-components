import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpImg({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpImg 
      class={className}
      {...props}
    />
  )
}

export default AmpImg
