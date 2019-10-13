import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebookComments({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFacebookComments 
      className={className}
      {...props}
    />
  )
}

export default AmpFacebookComments
