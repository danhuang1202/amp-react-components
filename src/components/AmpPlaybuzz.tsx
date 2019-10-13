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
      className={className}
      {...props}
    />
  )
}

export default AmpPlaybuzz
