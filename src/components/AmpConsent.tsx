import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpConsent({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpConsent 
      className={className}
      {...props}
    />
  )
}

export default AmpConsent
