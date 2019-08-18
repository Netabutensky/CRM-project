import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { set } from 'mongoose';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';



class TopEmployee extends Component {

    constructor() {
        super()
        this.state = {

        }
    }

    owner = () => {
        let hottestowner = {}
        this.props.data.filter(i => i.sold).map(c => hottestowner[c.owner] ? null : hottestowner[c.owner] = 0)
        this.props.data.filter(i => i.sold).map(c => hottestowner[c.owner]++)
        return hottestowner
    }
    findHottestemployee = (owners) => {
        let highest = Object.values(owners).sort(function (a, b) { return b - a })
        const highestSales = highest
        let keysSorted = Object.keys(owners).sort(function (a, b) { return owners[a] - owners[b] })
        const topEmployees = keysSorted
        const topThreeEmployees = [{ name: topEmployees[topEmployees.length - 1] }, { sales: highestSales[0] },
        { name: topEmployees[topEmployees.length - 2] }, { sales: highestSales[1] },
        { name: topEmployees[topEmployees.length - 3] }, { sales: highestSales[2] }]
        return topThreeEmployees
    }


    render() {

        let owners = this.owner()
        let owner = this.findHottestemployee(owners)

        let data = [
            {
                name: owner[0].name, pv: owner[1].sales,
            },
            {
                name: owner[2].name, pv: owner[3].sales,
            },
            {
                name: owner[4].name, pv: owner[5].sales,
            },
        ]


        return (
            <div className='topEmployees'>
                <h3>Top employees</h3>
                <ComposedChart
                    layout="vertical"
                    width={400}
                    height={200}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Bar dataKey="pv" barSize={20} fill="#FF0FB4" />
                </ComposedChart>
                
            </div>


        )
    }
}

export default TopEmployee