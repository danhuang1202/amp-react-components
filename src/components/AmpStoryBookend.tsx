import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpStoryBookend({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-story-bookend
      class={className}
      {...props}
    />
  )
}

export default AmpStoryBookend
