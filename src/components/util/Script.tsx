import React, { ReactElement } from 'react'

type Props = {
  /** HTML attribute for script tag */
  attribute?: object
  /** Data objest inside script tag */
  data: object
}

function Script({ attribute = {}, data }: Props): ReactElement {
  return React.createElement('script', {
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(data)
    },
    ...attribute
  })
}

export default Script
