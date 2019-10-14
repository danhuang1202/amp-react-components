import React, { ReactElement } from 'react'
import AmpScriptTag from './AmpScriptTag'

type Props = {
  /** id for amp-state component */
  id: string
  /** A document-scope, mutable JSON state. */
  state: object
}

function AmpState({ id, state }: Props): ReactElement {
  return <AmpScriptTag tag="amp-state" attribute={{ id }} data={state} />
}

export default AmpState
