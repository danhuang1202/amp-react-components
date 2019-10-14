import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebookLike({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-facebook-like
      class={className}
      {...props}
    />
  )
}

export default AmpFacebookLike
