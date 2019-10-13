import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDelightPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpDelightPlayer 
      className={className}
      {...props}
    />
  )
}

export default AmpDelightPlayer
