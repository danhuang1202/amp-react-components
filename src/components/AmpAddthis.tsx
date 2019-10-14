import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAddthis({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-addthis
      class={className}
      {...props}
    />
  )
}

export default AmpAddthis
