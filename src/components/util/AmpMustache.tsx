import React, { ReactElement } from 'react'

type Props = {
  /** id for amp-state component */
  id?: string
  /** template string. */
  template: string
}

function AmpMustache({ id, template }: Props): ReactElement {
  const props = {
    type: 'amp-mustache'
  }

  if (id) {
    props[id] = id
  }

  return React.createElement('template', {
    ...props, 
    dangerouslySetInnerHTML: {
      __html: template
    }
  })
}

export default AmpMustache
