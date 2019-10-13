import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStory({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpStory 
      className={className}
      {...props}
    />
  )
}

export default AmpStory
