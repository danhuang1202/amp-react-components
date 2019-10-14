import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGfycat({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-gfycat
      class={className}
      {...props}
    />
  )
}

export default AmpGfycat
