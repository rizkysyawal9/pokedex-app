import { SET_LOADING_FALSE, SET_LOADING_TRUE, SET_MODAL } from '../types'

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      }
    case SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      }
    case SET_MODAL:
      const { show, type, title, message } = action.payload
      return {
        ...state,
        loading: false,
        modal: {
          show,
          type,
          title,
          message,
        },
      }
    default:
      return {
        ...state,
      }
  }
}
