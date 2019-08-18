import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Actions extends Component {

    constructor() {
        super()
        this.state = {
            client: 'Perkins Cunningham',
            ownerUpdate: 'Emily Durham',
            emailType: 'A',
            firstName: '',
            surName: '',
            country: '',
            owner: '',
            email: '',
            sold: false,
           
           

        }
    }



    updateClient = (event) => {
        const change = event.target.id
        if (change === 'transferOwner') {
            this.props.updateClient({ name: this.state.client, owner: this.state.ownerUpdate })
        }
        else if (change === 'sendEmailType') {
            this.props.updateClient({ name: this.state.client, emailType: this.state.emailType })
        }
        else {
            this.props.updateClient({ name: this.state.client, sold: true })
        }


    }



    newClient = () => {
        this.props.newClient({
            name: this.state.firstName + ' ' + this.state.surName,
            country: this.state.country, owner: this.state.owner,
            email: this.state.email, firstContact: new Date(),
            sold: false
        })
        
    }



    handleEmail = (event) => {
        const email = event.target.value
        this.setState({ email }, function () {
            console.log('email')
        })
    }



    handleClient = (event) => {
        const client = event.target.value
        this.setState({ client })
    }



    handleEmailType = (event) => {
        const emailType = event.target.value
        console.log(emailType)
        this.setState({ emailType })
    }


    handleOwner = (event) => {
        const owner = event.target.value
        console.log(owner)
        this.setState({ owner })
    }



    handleOwnerUpdate = (event) => {
        const owner = event.target.value
        console.log(owner)
        this.setState({ ownerUpdate: owner })
    }


    handleFirstName = (event) => {
        const firstName = event.target.value
        this.setState({ firstName })
    }


    handleSurName = (event) => {
        const surName = event.target.value
        this.setState({ surName })
    }


    handleCountry = (event) => {
        const country = event.target.value
        this.setState({ country })
    }

    
    render() {
        let owners = this.props.data.map(o => o.owner)
        let a = [...new Set(owners)]
        let e = ['A', 'B', 'C', 'D']
        let client = this.props.data.map(o => o.name)
        let c = [...new Set(client)]

        return (
            <div className="Action-container">
                <div className="update">Update</div>
                <div className="updateContainer">
                    <span>Client:</span>
                    <select value={this.state.client} onChange={this.handleClient} className="selectClient">
                        {c.map(e => <option value={e}>{e}</option>)}
                    </select>
                    <br></br>
                    <span>Transfer ownership to</span>

                    <select value={this.state.ownerUpdate} onChange={this.handleOwnerUpdate} className="selects" >

                        {a.map(l => <option value={l} onChange={this.handleOwnerUpdate}>{l}</option>)}
                    </select>
                    <span onClick={this.updateClient} className="transfer" id="transferOwner">Transfer</span>
                    <br></br>

                    <span>choose emailType</span>
                    <select className="selects" value={this.state.emailType} onChange={this.handleEmailType}>
                        <option >emailType</option>
                        {e.map(t => <option value={t} onChange={this.handleEmailType}>{t}</option>)}
                    </select>

                    <span onClick={this.updateClient} className="transfer" id="sendEmailType" value={this.state.emailType}>Send</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span className="declaire" id="declaireSale">Declaire sale:</span>
                    <span className="transfer" id="declaireSale" onClick={this.updateClient} >Declaire</span>
                </div>
                <div className="border"></div>
                <div className="addClientContainer">
                    <h4 className="addClient">Add client</h4>

                    FirstName: <input value={this.state.firstName} onChange={this.handleFirstName} className="addInput" placeholder="write your firstname"></input>
                    <br></br>
                    <br></br>
                    SurName:<input value={this.state.surName} onChange={this.handleSurName} className="addInput" placeholder="write your surname"></input>
                    <br></br>
                    <br></br>
                    Email:<input value={this.state.email} onChange={this.handleEmail} className="addInput" placeholder="write your email"></input>
                    <br></br>
                    <br></br>
                    Country:<input value={this.state.country} onChange={this.handleCountry} className="addInput" placeholder="write your country"></input>
                    <br></br>
                    <br></br>
                    Owner:<input value={this.state.owner} onChange={this.handleOwner} className="addInput" placeholder="write your owner"></input>
                    <br></br>
                    <br></br>
                    <a href="javascript:location.reload(true)"> <button className="addButton" onClick={this.newClient}>Add new client</button> </a>
                </div>

            </div>
        )
    }
}

export default Actions