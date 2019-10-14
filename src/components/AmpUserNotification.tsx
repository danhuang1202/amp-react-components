import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpUserNotification({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-user-notification
      class={className}
      {...props}
    />
  )
}

export default AmpUserNotification
