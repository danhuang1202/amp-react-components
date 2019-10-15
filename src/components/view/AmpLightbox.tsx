import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpLightbox({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-lightbox
      class={className}
      {...props}
    />
  )
}

export default AmpLightbox
