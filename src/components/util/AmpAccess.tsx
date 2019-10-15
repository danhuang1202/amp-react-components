import React, { ReactElement } from 'react'
import Script from './Script'

type Props = {
  /** id for amp-state component */
  id: string
  /** A document-scope, mutable JSON object. */
  data: object
}

function AmpAccess({ id, data }: Props): ReactElement {
  return <Script attribute={{ id }} data={data} />
}

export default AmpAccess
