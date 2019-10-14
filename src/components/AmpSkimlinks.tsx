import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSkimlinks({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-skimlinks
      class={className}
      {...props}
    />
  )
}

export default AmpSkimlinks
