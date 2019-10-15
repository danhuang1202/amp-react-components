import React, { ReactElement } from 'react'

type Props = {
  /** id for amp-state component */
  id?: string
  /** React children node. */
  children?: object
}

function AmpMustache({ id, children }: Props): ReactElement {
  const props = {
    type: 'amp-mustache'
  }

  if (id) {
    props[id] = id
  }

  return React.createElement('template', props, children)
}

export default AmpMustache
