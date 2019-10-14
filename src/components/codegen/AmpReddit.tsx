import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpReddit({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-reddit
      class={className}
      {...props}
    />
  )
}

export default AmpReddit
