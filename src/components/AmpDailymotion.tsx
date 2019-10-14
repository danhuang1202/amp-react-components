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
    <AmpDailymotion 
      class={className}
      {...props}
    />
  )
}

export default AmpDailymotion
