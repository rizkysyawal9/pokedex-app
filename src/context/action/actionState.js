import React, { useReducer } from 'react'
import { SET_MODAL } from '../types'

import ActionReducer from './actionReducer'
import ActionContext from './actionContext'

const ActionState = (props) => {
  const initialState = {
    modal: {
      show: false,
      type: '',
      message: '',
    },
  }
  const [state, dispatch] = useReducer(ActionReducer, initialState)

  //set modals
  const setModal = (show, type, title, message) =>
    dispatch({
      type: SET_MODAL,
      payload: {
        show: show,
        type: type,
        title: title,
        message: message,
      },
    })

  return (
    <ActionContext.Provider
      value={{
        modal: state.modal,
        setModal,
      }}
    >
      {props.children}
    </ActionContext.Provider>
  )
}

export default ActionState
