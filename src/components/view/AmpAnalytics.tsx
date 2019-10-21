import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAnalytics({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-analytics
      class={className}
      {...props}
    />
  )
}

export default AmpAnalytics