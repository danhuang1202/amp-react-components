import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebookPage({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-facebook-page
      class={className}
      {...props}
    />
  )
}

export default AmpFacebookPage
