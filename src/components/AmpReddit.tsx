import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpReddit({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpReddit 
      className={className}
      {...props}
    />
  )
}

export default AmpReddit
