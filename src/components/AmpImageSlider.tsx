import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpImageSlider({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpImageSlider 
      class={className}
      {...props}
    />
  )
}

export default AmpImageSlider
