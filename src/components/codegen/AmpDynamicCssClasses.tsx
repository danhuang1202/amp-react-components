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
    <amp-dynamic-css-classes
      class={className}
      {...props}
    />
  )
}

export default AmpDynamicCssClasses
