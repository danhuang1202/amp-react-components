import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGoogleVrviewImage({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-google-vrview-image
      class={className}
      {...props}
    />
  )
}

export default AmpGoogleVrviewImage
