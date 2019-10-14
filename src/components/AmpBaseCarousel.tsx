import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBaseCarousel({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-base-carousel
      class={className}
      {...props}
    />
  )
}

export default AmpBaseCarousel
