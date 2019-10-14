import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFxCollection({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFxCollection 
      class={className}
      {...props}
    />
  )
}

export default AmpFxCollection
