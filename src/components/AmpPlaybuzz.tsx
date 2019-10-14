import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPlaybuzz({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPlaybuzz 
      class={className}
      {...props}
    />
  )
}

export default AmpPlaybuzz
