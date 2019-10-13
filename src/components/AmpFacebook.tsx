import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebook({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFacebook 
      className={className}
      {...props}
    />
  )
}

export default AmpFacebook
