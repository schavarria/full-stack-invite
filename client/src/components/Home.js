import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContacts, sendStatus, getGoing, getNotGoing } from '../actions/inviteActions'
import { Link } from 'react-router-dom'
import '../styles/homeStyle.css'

class Home extends Component {
  componentDidMount() {
    getContacts()
    getGoing()
    getNotGoing()
  }

  handleGoing = (e) =>{
    sendStatus("going", e.target.value)
  }

  handleNotGoing = (e) =>{
    sendStatus("notgoing", e.target.value)
  }


  render() {
    
    return (
      <div className="monsterCon">
        
        <div className="pathsCon" >
          <Link to='/going'> <p>Going: {this.props.going.length}</p> </Link>
          <Link to='/notgoing'><p>Not Going: {this.props.notgoing.length}</p> </Link>
        </div>
         <div className="userCon">
           <div><img  src={this.props.person.image}/></div>
           <div>
             <p className="name">Name: {this.props.person.name}</p>
             <p>Email: {this.props.person.email}</p>
             <p>Phone: {this.props.person.phone}</p>
             </div>
           <div className="buttonCon">
            <button className="go" onClick={this.handleGoing} value={this.props.person.id}>Going</button>
    				<button className="notgo" onClick={this.handleNotGoing} value={this.props.person.id}>Not Going</button>
           </div>
         </div>
      
      
      </div>
    )
  }
}

function mapStateToProps(appState) {
 
  return {
    going: appState.inviteReducer.going,
    notgoing: appState.inviteReducer.notgoing,
    person: appState.inviteReducer.person
  }
}

export default connect(mapStateToProps)(Home)