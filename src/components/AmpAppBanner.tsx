import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAppBanner({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAppBanner 
      className={className}
      {...props}
    />
  )
}

export default AmpAppBanner
