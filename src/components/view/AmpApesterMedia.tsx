import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpApesterMedia({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-apester-media
      class={className}
      {...props}
    />
  )
}

export default AmpApesterMedia
