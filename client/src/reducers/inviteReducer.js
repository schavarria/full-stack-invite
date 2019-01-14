const initialState = {
  going:[],
  notgoing:[],
  person:{}
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here getcontacts, getgoing, getnotgoing
    case 'GET_CONTACTS':
      return {...state, person: action.payload}
    case 'GET_GOING':
      return {...state, going: action.payload}
    case 'GET_NOTGOING':
      return {...state, notgoing: action.payload}
    default:
      return state
  }
}