import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVine({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-vine
      class={className}
      {...props}
    />
  )
}

export default AmpVine
