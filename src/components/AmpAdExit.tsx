import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAdExit({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAdExit 
      className={className}
      {...props}
    />
  )
}

export default AmpAdExit
