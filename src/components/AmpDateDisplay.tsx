import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDateDisplay({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-date-display
      class={className}
      {...props}
    />
  )
}

export default AmpDateDisplay
