import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpGoogleDocumentEmbed({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpGoogleDocumentEmbed 
      className={className}
      {...props}
    />
  )
}

export default AmpGoogleDocumentEmbed
