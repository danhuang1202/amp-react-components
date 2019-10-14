import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGist({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-gist
      class={className}
      {...props}
    />
  )
}

export default AmpGist
