import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpOrientationObserver({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpOrientationObserver 
      className={className}
      {...props}
    />
  )
}

export default AmpOrientationObserver
