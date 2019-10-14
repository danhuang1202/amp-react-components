import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpImageLightbox({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-image-lightbox
      class={className}
      {...props}
    />
  )
}

export default AmpImageLightbox
