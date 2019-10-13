import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpHulu({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpHulu 
      className={className}
      {...props}
    />
  )
}

export default AmpHulu
