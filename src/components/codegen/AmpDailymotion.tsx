import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDailymotion({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-dailymotion
      class={className}
      {...props}
    />
  )
}

export default AmpDailymotion
