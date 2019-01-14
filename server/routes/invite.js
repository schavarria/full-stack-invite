const express = require('express')
const Router = express.Router()
const axios = require('axios')
var contacts = []
axios.get('https://randomuser.me/api/?results=100&?inc=picture,name,email,phone?').then(resp =>{
  contacts = resp.data.results.map((person,i) => (
    ({
      id: i + 1,
      image: person.picture.large, 
      name: person.name.first+ " "+ person.name.last,
      email: person.email,
      phone: person.phone,
      status: 'pending'
    })
  ))
Router.get('/contacts', (req, res, next) => {
  res.json({
    person: contacts.find(p => p.status === 'pending')
  })
 }) 
})
 Router.patch('/contacts', (req,res, next) => {
   const id = req.body.id
   const status = req.body.status
   contacts = contacts.map(person => {
     if (person.id == id) {
       return {...person, status: status}
     } else {
       return person
     }
   })
   res.json (contacts)
 })
 Router.get('/going', (req, res, next) => {
   var going = contacts.filter(user => user.status === 'going')
   res.json(going)
 })
 Router.get('/notgoing', (req, res, next) => {
   var notGoing= contacts.filter(user => user.status === 'notgoing')
   res.json(notGoing)
 })
module.exports = Router