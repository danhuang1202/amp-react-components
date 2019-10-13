import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpYotpo({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpYotpo 
      className={className}
      {...props}
    />
  )
}

export default AmpYotpo
