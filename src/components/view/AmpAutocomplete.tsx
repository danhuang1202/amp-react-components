import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpAutocomplete({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-autocomplete
      class={className}
      {...props}
    />
  )
}

export default AmpAutocomplete
