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
    <AmpDatePicker 
      className={className}
      {...props}
    />
  )
}

export default AmpDatePicker
