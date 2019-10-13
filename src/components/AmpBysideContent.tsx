import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpBysideContent({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpBysideContent 
      className={className}
      {...props}
    />
  )
}

export default AmpBysideContent
