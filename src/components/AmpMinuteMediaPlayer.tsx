import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpMinuteMediaPlayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpMinuteMediaPlayer 
      className={className}
      {...props}
    />
  )
}

export default AmpMinuteMediaPlayer
