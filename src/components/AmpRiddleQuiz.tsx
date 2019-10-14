import React, {ReactElement} from 'react'

type Props = {
  /** class name of component. */
  className?: string
  /** rest props of component */
  props: object
}

function AmpRiddleQuiz({
  className, ...props
}: Props): ReactElement{
  return (
    <AmpRiddleQuiz 
      class={className}
      {...props}
    />
  )
}

export default AmpRiddleQuiz
