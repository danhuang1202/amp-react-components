import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpRecaptchaInput({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpRecaptchaInput 
      className={className}
      {...props}
    />
  )
}

export default AmpRecaptchaInput
