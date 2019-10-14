import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFitText({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFitText 
      class={className}
      {...props}
    />
  )
}

export default AmpFitText
