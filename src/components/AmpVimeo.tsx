import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVimeo({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-vimeo
      class={className}
      {...props}
    />
  )
}

export default AmpVimeo
