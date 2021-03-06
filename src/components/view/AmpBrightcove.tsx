import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBrightcove({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-brightcove
      class={className}
      {...props}
    />
  )
}

export default AmpBrightcove
