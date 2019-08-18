import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { set } from 'mongoose';
import TopEmployee from './Charts/TopEmployee'
import SalesByCountry from './Charts/SalesByCountry'

class Analytics extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    
    country = () => {
        let hottestcountry = {}
        this.props.data.filter(i => i.sold).map(c => hottestcountry[c.country] ? null : hottestcountry[c.country] = 0)
        this.props.data.filter(i => i.sold).map(c => hottestcountry[c.country]++)
        return hottestcountry
    }



    findHottestCountry = (countries) => {
        let highest = Object.values(countries).sort(function (a, b) { return b - a })[0]
        for (let i of Object.keys(countries)) {
            if (countries[i] == highest) {
                return i
            }
        }
    }


    render() {
        const newClients = this.props.data.length - 759
        const emails = this.props.data.filter(e => e.emailType).length
        const sold = this.props.data.filter(s => s.sold).length
        let countries = this.country()
        let country = this.findHottestCountry(countries)




        return (

            <div>
                <div className="charts">

                    <div><i class="fas fa-chart-line"></i></div><h5>New clients {newClients} </h5>
                   <div><i class="fas fa-envelope"> </i></div> <h5>Email sent {emails}</h5>
                    <div><i class="fas fa-user-alt"></i> </div><h5>Outstanding clients {sold}</h5>
                   <div> <i class="fas fa-globe-americas"></i></div> <h5>Hottest countries {country}</h5>

                </div>

                <TopEmployee data={this.props.data} />
                <SalesByCountry data={this.props.data} />
            </div>



        )
    }
}

export default Analytics