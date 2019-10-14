import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpEmbedlyCard({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-embedly-card
      class={className}
      {...props}
    />
  )
}

export default AmpEmbedlyCard
