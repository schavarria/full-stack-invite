import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGoing } from '../actions/inviteActions'
import '../styles/goingStyle.css'

class Going extends Component {
  componentDidMount() {
    getGoing()
  }
  
  render() {
    return (
      <div className="mainCon">
       <div><h1>Going :</h1> </div>
        {this.props.going.map(item => (
        <div className="goingCon" key={item.id} >
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
    going: appState.inviteReducer.going
  }
}

export default connect(mapStateToProps)(Going)