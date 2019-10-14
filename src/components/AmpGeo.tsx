import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGeo({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpGeo 
      class={className}
      {...props}
    />
  )
}

export default AmpGeo
