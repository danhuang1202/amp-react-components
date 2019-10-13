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
      className={className}
      {...props}
    />
  )
}

export default AmpForm
