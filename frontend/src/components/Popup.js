import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Popup extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            country: ''

        }
    }


    updatePopup = () => {
        if (this.state.country === '') {
            this.props.updatePopup({ _id: this.props.clients._id, name: this.state.name, country: this.props.clients.country })
        } else if (this.state.name === '') { this.props.updatePopup({ _id: this.props.clients._id, name: this.props.clients.name, country: this.state.country }) }
        else { this.props.updatePopup({ _id: this.props.clients._id, name: this.state.name, country: this.state.country }) }

    }

    updateName = (n) => {
        const name = n.target.value
        this.setState({
            name
        })
    }



    updateCountry = (c) => {
        const country = c.target.value
        this.setState({
            country
        })
    }



    showPopUp = () => {
        this.props.showPopUp()
    }



    render() {
        const name = this.props.clients.name
        const country = this.props.clients.country



        return (
            <div className="popupContainer">

                <span className="xs" onClick={this.showPopUp} >X</span>

                <div className="popcontainer">
                    <div>Update Name</div>
                    <input className="popups" value={this.state.name} onChange={this.updateName} placeholder={name} />
                    <br></br>
                    <div className="popupssdiv">Update country</div>
                    <input className="popupss" value={this.state.country} onChange={this.updateCountry} placeholder={country} />

                    <br></br>
                    <a href="javascript:location.reload(true)"><button className="updates" value='update' onClick={this.updatePopup}>update</button></a>
                </div>
            </div>

        )
    }
}

export default Popup

