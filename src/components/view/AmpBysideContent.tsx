import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBysideContent({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-byside-content
      class={className}
      {...props}
    />
  )
}

export default AmpBysideContent
