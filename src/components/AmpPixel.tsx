import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpPixel({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpPixel 
      className={className}
      {...props}
    />
  )
}

export default AmpPixel
