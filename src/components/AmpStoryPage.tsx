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
    <amp-story-page
      class={className}
      {...props}
    />
  )
}

export default AmpStoryPage
