export const moduleName = 'form'
export const SEND_FORM = `${moduleName}/SEND_FORM`

const init = {
  sended: false
}

export default function formReducer(state = init, action) {
  const {type} = action

  switch (type) {
    case SEND_FORM:
      return {
        ...state,
        sended: true
      }
    default:
      return state
  }
}

export const sendForm = () => {
  return {
    type: SEND_FORM
  }
}