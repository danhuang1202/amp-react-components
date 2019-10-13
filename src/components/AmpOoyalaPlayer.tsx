import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpOoyalaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpOoyalaPlayer 
      className={className}
      {...props}
    />
  )
}

export default AmpOoyalaPlayer
