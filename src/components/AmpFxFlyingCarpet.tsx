import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFxFlyingCarpet({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFxFlyingCarpet 
      class={className}
      {...props}
    />
  )
}

export default AmpFxFlyingCarpet
