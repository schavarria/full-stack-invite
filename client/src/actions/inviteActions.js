import axios from 'axios'
import store from '../store'

//axios.defaults.baseURL = '/api'

//get contacts



export function getContacts() {
  axios.get('api/contacts').then(resp => {
    store.dispatch({
      type: 'GET_CONTACTS', 
      payload: resp.data.person
    })
  })
  getGoing()
  getNotGoing()
}
//get going
export function getGoing() {
  axios.get('api/going').then(resp => {
    store.dispatch({
      type: 'GET_GOING', 
      payload: resp.data
    })
  })
}
//get notgoing
export function getNotGoing() {
  axios.get('api/notgoing').then(resp => {
    store.dispatch({
      type: 'GET_NOTGOING', 
      payload: resp.data
    })
  })
}
//patch going 
export function sendStatus (status, id){
  axios.patch('api/contacts', {
    id: id,
    status: status
  }).then(resp => {
    getContacts()
  })
}