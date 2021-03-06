import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSmartlinks({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-smartlinks
      class={className}
      {...props}
    />
  )
}

export default AmpSmartlinks
