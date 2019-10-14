import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpForm({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpForm 
      class={className}
      {...props}
    />
  )
}

export default AmpForm
