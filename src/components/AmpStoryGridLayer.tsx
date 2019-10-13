import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryGridLayer({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpStoryGridLayer 
      className={className}
      {...props}
    />
  )
}

export default AmpStoryGridLayer
