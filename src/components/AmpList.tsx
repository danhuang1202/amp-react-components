import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpList({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpList 
      class={className}
      {...props}
    />
  )
}

export default AmpList
