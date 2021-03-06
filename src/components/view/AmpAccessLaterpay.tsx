import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAccessLaterpay({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-access-laterpay
      class={className}
      {...props}
    />
  )
}

export default AmpAccessLaterpay
