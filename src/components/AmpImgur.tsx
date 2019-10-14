import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpImgur({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-imgur
      class={className}
      {...props}
    />
  )
}

export default AmpImgur
