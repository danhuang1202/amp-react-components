import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpDatePicker({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-date-picker
      class={className}
      {...props}
    />
  )
}

export default AmpDatePicker
