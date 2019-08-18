import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Popup from './Popup';

class Client extends Component {
    constructor() {
        super()
        this.state = {
            showPopUp: false,
           
        }
    }

   

    showPopUp = () => {
        this.setState({
            showPopUp: !this.state.showPopUp
        })
    }


    new = () => {
        if (this.props.searchPut === '') {
            const c = this.props.client
        }
        else {
            const c = this.props.client.filter(f => f.toLowerCase().includes(this.props.searchPut))
        }
    }

    userClicked = () => {
        this.props.userClicked()
    }

   

    render() {
        const c = this.props.client
      const popup= this.showPopUp

        return (<div>
            


            <div className="maybe2" onClick={popup} >

                <span onClick={this.userClicked} className="firstname">{c.name.split(' ')[0]}</span>
                <span className="surname">{c.name.split(' ')[1]}</span>
                <span className="email">{c.email}</span>
                {c.emailType == null ? <span className="x">X</span> : <span className="emailType">{c.emailType}</span>}
                {c.sold ? <span className="sold">SOLD</span> : <span className="x">X</span>}
                <span className="owner">{c.owner}</span>
                <span className="country">{c.country}</span>

            </div>
            <span className="newpopup"> {this.state.showPopUp ? <Popup updatePopup={this.props.updatePopup}  clients={c} showPopUp={this.showPopUp}/> : null}</span>
        </div>


        )
    }
}

export default Client

