import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGfycat({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpGfycat 
      className={className}
      {...props}
    />
  )
}

export default AmpGfycat
