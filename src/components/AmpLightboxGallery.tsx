import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpLightboxGallery({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpLightboxGallery 
      class={className}
      {...props}
    />
  )
}

export default AmpLightboxGallery
