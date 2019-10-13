import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpVizVega({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpVizVega 
      className={className}
      {...props}
    />
  )
}

export default AmpVizVega
