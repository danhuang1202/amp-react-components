import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVk({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-vk
      class={className}
      {...props}
    />
  )
}

export default AmpVk
