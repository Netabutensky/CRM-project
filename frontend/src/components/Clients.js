import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Client from './Client';


class Clients extends Component {

    constructor() {
        super()
        this.state = {
            searchPut: '',
            select: 'name',
            start: 0,
            userClicked: false,
           

        }
    }

    searchPutChange = (event) => {
        const input = event.target.value
        this.setState({
            searchPut: input,
            start: 0
        })
    }

    selectPutChange = (event) => {
        const input = event.target.value
        this.setState({ select: input }, function () {
            console.log(this.state.select)
        })
    }
    moreInfo = (event) => {
        let direction = event.target.id
        if (this.state.start > 0 || direction === 'right') {
            direction === 'right' ?
                this.setState({
                    start: 20 + this.state.start,

                }) : this.setState({
                    start: this.state.start - 20,

                })
        }

    }

    userClicked = () => {
        this.setState({
            userClicked: !this.state.userClicked
        }, function () {
            console.log('user-clicked!')
        })
    }

    


    render() {
        const who = this.state.select
        const clients = this.props.data
        const serachClient = clients.filter(r => r[who].toLowerCase().includes(this.state.searchPut))
      
        return (

            <div>


                <ul className="search-container">


                    <li> <span onClick={this.moreInfo} id="left" className="fas fa-arrow-left"></span>
                        <input className="search" value={this.state.searchPut} onChange={this.searchPutChange} placeholder="search" />
                    </li>
                    <li>

                        <select value={this.state.select} onChange={this.selectPutChange} className="select">
                            <option value="name">name</option>
                            <option value="email">email</option>
                            <option value="country">country</option>
                            <option value="owner">owner</option>
                        </select>

                        <span onClick={this.moreInfo} id="right" className="fas fa-arrow-right"></span>
                    </li>

                </ul>


                <div className="maybe" id="t01">


                    <span className="titles">First Name</span>
                    <span className="titles">Last Name</span>
                    <span className="titles">Email</span>
                    <span className="titles">emailType</span>
                    <span className="titles">sold</span>
                    <span className="titles">owner</span>
                    <span className="titles">country</span>


                </div>


                <div>{this.state.searchPut === '' ?

                    clients.slice(this.state.start, this.state.start + 20).map(c => <Client updatePopup={this.props.updatePopup} userClicked={this.userClicked} client={c} />) :
                    serachClient.slice(this.state.start, this.state.start + 20).map(c => <Client updatePopup={this.props.updatePopup} userClicked={this.userClicked} client={c} />)}



                </div>
              

            </div>
        )
    }
}

export default Clients