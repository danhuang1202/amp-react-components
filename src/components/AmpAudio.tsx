import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAudio({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpAudio 
      className={className}
      {...props}
    />
  )
}

export default AmpAudio
