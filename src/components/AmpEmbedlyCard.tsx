import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpEmbedlyCard({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpEmbedlyCard 
      className={className}
      {...props}
    />
  )
}

export default AmpEmbedlyCard
