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
    <amp-recaptcha-input
      class={className}
      {...props}
    />
  )
}

export default AmpRecaptchaInput
