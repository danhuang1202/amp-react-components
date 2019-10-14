import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpYoutube({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpYoutube 
      class={className}
      {...props}
    />
  )
}

export default AmpYoutube
