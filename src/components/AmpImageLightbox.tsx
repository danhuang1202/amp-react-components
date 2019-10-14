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
    <AmpImageLightbox 
      class={className}
      {...props}
    />
  )
}

export default AmpImageLightbox
