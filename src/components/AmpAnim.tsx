import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAnim({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-anim
      class={className}
      {...props}
    />
  )
}

export default AmpAnim
