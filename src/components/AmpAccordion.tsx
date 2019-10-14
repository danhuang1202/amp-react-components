import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAccordion({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAccordion 
      class={className}
      {...props}
    />
  )
}

export default AmpAccordion
