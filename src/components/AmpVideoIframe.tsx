import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVideoIframe({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpVideoIframe 
      className={className}
      {...props}
    />
  )
}

export default AmpVideoIframe
