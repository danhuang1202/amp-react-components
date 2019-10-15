import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpNextPage({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-next-page
      class={className}
      {...props}
    />
  )
}

export default AmpNextPage
