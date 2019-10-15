import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSidebar({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-sidebar
      class={className}
      {...props}
    />
  )
}

export default AmpSidebar
