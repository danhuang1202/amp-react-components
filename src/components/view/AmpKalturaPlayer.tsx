import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpKalturaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-kaltura-player
      class={className}
      {...props}
    />
  )
}

export default AmpKalturaPlayer
