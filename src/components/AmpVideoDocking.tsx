import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVideoDocking({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-video-docking
      class={className}
      {...props}
    />
  )
}

export default AmpVideoDocking
