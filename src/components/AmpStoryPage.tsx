import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryPage({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpStoryPage 
      className={className}
      {...props}
    />
  )
}

export default AmpStoryPage
