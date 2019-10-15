import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAccessPoool({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-access-poool
      class={className}
      {...props}
    />
  )
}

export default AmpAccessPoool
