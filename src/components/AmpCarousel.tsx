import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpCarousel({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpCarousel 
      class={className}
      {...props}
    />
  )
}

export default AmpCarousel
