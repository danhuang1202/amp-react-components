import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpSoundcloud({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpSoundcloud 
      className={className}
      {...props}
    />
  )
}

export default AmpSoundcloud
