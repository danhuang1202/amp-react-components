import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpIframe({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpIframe 
      className={className}
      {...props}
    />
  )
}

export default AmpIframe
