import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryPageAttachment({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpStoryPageAttachment 
      className={className}
      {...props}
    />
  )
}

export default AmpStoryPageAttachment
