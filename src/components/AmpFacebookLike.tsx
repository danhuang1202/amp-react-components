import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebookLike({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFacebookLike 
      className={className}
      {...props}
    />
  )
}

export default AmpFacebookLike
