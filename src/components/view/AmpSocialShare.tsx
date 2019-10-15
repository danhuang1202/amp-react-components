import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSocialShare({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-social-share
      class={className}
      {...props}
    />
  )
}

export default AmpSocialShare
