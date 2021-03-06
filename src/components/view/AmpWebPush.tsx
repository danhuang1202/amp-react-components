import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpWebPush({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-web-push
      class={className}
      {...props}
    />
  )
}

export default AmpWebPush
