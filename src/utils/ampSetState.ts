function ampSetState(state: object = {}) {
  return `AMP.setState(${JSON.stringify(state).replace(/['|"]/g, '')})`
}

export default ampSetState