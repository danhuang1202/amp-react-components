import React, { ReactElement } from 'react'

type Props = {
  /** AMP component name */
  tag: string
  /** HTML attribute for amp component */
  attribute?: object
  /** Data objest inside script tag */
  data: object
}

function AmpScript({ tag, attribute, data }: Props): ReactElement {
  const script = React.createElement('script', {
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    }
  })
  return React.createElement(tag, attribute, script)
}

export default AmpScript
