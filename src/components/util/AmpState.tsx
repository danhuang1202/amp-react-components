import React, { ReactElement } from 'react'

type Props = {
  /** id for amp-state component */
  id: string
  /** A document-scope, mutable JSON state. */
  state: object
}

function AmpState({ id, state }: Props): ReactElement {
  const script = React.createElement('script', {
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(state)
    }
  })
  return React.createElement('amp-state', { id }, script)
}

export default AmpState
