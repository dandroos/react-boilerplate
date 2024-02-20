// src/reducers/index.js

const initialState = {
  deviceType: undefined,
  windowOrientation: undefined,
}

const reducer = (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)
  switch (type) {
    case "SET_DEVICE_TYPE":
      newState.deviceType = payload
      break
    case "SET_WINDOW_ORIENTATION":
      newState.windowOrientation = payload
      break
    default:
      break
  }
  return newState
}

export default reducer
