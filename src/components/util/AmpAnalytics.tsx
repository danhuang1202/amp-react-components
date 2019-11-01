import React, { ReactElement } from 'react'

type Props = {
  /** A document-scope, tracking JSON data. */
  data: object
}

function AmpAnalytics({ data, ...props }: Props): ReactElement {
  const script = React.createElement('script', {
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    }
  })
  return React.createElement('amp-analytics', { ...props }, script)
}

export default AmpAnalytics
