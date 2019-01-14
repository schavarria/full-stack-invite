import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNotGoing } from '../actions/inviteActions'
import '../styles/goingStyle.css'

class NotGoing extends Component {
  componentDidMount() {
    getNotGoing()
  }
  
  render() {
    return (
      <div className="mainCon">
         <div className="title"><h1>Not Going :</h1> </div>
        {this.props.notgoing.map(item => (
          <div className="goingCon" key={item.id}>
          <div className="image">
            <img src={item.image}/></div>
          <div>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone}</p>
            </div>
          
        </div>
        ))}
       
      </div>
    )
  }
}

function mapStateToProps(appState) {
  console.log(appState)
  return {
   notgoing: appState.inviteReducer.notgoing
  }
}

export default connect(mapStateToProps)(NotGoing)