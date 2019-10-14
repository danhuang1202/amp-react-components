import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpTruncateText({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-truncate-text
      class={className}
      {...props}
    />
  )
}

export default AmpTruncateText
