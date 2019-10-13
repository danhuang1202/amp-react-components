import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpFacebookPage({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpFacebookPage 
      className={className}
      {...props}
    />
  )
}

export default AmpFacebookPage
