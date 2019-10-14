import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMegaphone({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpMegaphone 
      class={className}
      {...props}
    />
  )
}

export default AmpMegaphone
