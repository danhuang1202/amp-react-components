import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebook({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-facebook
      class={className}
      {...props}
    />
  )
}

export default AmpFacebook
