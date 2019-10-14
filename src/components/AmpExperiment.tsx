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
    <amp-experiment
      class={className}
      {...props}
    />
  )
}

export default AmpExperiment
