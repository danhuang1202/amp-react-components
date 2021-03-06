import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpScript({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-script
      class={className}
      {...props}
    />
  )
}

export default AmpScript
