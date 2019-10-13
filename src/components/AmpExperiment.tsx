import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpExperiment({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpExperiment 
      className={className}
      {...props}
    />
  )
}

export default AmpExperiment
