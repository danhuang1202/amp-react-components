import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function Amp3dGltf({
  className, ...props
}: Props): ReactElement{
  return (
    <Amp3dGltf 
      className={className}
      {...props}
    />
  )
}

export default Amp3dGltf
