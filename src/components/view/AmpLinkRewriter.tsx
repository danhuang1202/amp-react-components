import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpLinkRewriter({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-link-rewriter
      class={className}
      {...props}
    />
  )
}

export default AmpLinkRewriter
