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
    <AmpDateDisplay 
      className={className}
      {...props}
    />
  )
}

export default AmpDateDisplay
