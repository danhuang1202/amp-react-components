import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpInstallServiceworker({
  className, ...props
}: Props): ReactElement{
  return (
    <amp-install-serviceworker
      class={className}
      {...props}
    />
  )
}

export default AmpInstallServiceworker
