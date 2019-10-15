import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSubscriptions({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-subscriptions
      class={className}
      {...props}
    />
  )
}

export default AmpSubscriptions
