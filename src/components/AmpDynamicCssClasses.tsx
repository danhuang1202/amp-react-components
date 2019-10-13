import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDynamicCssClasses({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpDynamicCssClasses 
      className={className}
      {...props}
    />
  )
}

export default AmpDynamicCssClasses
