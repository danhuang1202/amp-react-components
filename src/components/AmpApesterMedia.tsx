import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpApesterMedia({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpApesterMedia 
      className={className}
      {...props}
    />
  )
}

export default AmpApesterMedia
