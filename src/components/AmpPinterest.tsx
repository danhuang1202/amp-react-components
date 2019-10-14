import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPinterest({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPinterest 
      class={className}
      {...props}
    />
  )
}

export default AmpPinterest
