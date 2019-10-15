import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDateCountdown({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-date-countdown
      class={className}
      {...props}
    />
  )
}

export default AmpDateCountdown
