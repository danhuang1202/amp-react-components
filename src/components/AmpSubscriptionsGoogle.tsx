import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSubscriptionsGoogle({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-subscriptions-google
      class={className}
      {...props}
    />
  )
}

export default AmpSubscriptionsGoogle
