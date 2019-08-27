import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Actions from './components/Actions'
import Analytics from './components/Analytics'
import Clients from './components/Clients'


class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],

    }
  } 
  

  newClient = async (client) => {
    axios.post('http://localhost:8080/client', client)
   
    this.myGet()

  }

  
  myGet = async () => {
    let data = await axios.get('http://localhost:8080/clients')
    data = data.data
    this.setState({
      data
    })
  }


  componentDidMount = async () => {
    this.myGet()
  }


  updateClient = async (client) => {
    console.log(client)
    let data = await axios.put(`http://localhost:8080/updateClient/${client.name}`, client)
    console.log(data.data.name + ' updted')
    this.myGet()
  }


  updatePopup = async (client) => {
    await axios.put(`http://localhost:8080/popup`, client, function (res) {
      res.end()
    })
  }



  render() {
    return (
      <div className="App" >

        <Router>
          <ul>
            <Link className="li" to="/clients"><li>Clients</li></Link>
            <Link className="li" to="/actions"><li>Actions</li></Link>
            <Link className="li" to="/analytics"><li>Analytics</li></Link>
          </ul>

          <Route path="/clients" exact render={() => <Clients updatePopup={this.updatePopup} data={this.state.data} />} />
          <Route path="/actions" exact render={() => <Actions updateClient={this.updateClient} newClient={this.newClient} data={this.state.data} />} />
          <Route path="/analytics" exact render={() => <Analytics  newClient={this.newClient} data={this.state.data} />} />
        </Router>
      </div>
    );
  }

}

export default App;
