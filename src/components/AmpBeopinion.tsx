import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBeopinion({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpBeopinion 
      className={className}
      {...props}
    />
  )
}

export default AmpBeopinion
