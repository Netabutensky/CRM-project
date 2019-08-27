
const express = require('express')
const router = express.Router()
const ClientSchema = require('../model/ClientSchema')

// let data = require('../routes/data') 
// for(let i of data) {
//     let newClient = new ClientSchema(i)
//     newClient.save()
// }

router.put('/updateClient/:name', (req, res) => {
    console.log(req.body)
    const name = req.params.name
    const owner = req.body.owner
    const emailType = req.body.emailType
    const sold = req.body.sold
    ClientSchema.find({ name: name }, function (err, response) {
        if (owner) {
            console.log(owner)
            response[0].owner = owner
        }
        else if (emailType) {
            response[0].emailType = emailType
        }
        else {
            response[0].sold = sold
        }
        response[0].save()
        res.send(response[0])
    }
    )
}
)



router.put('/popup', (req, res) => {
    const data = req.body
    console.log(data)
    ClientSchema.findOneAndUpdate(
        { _id: data._id }, { $set: { country: data.country, name: data.name } }, { new: true }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });
}
)




router.get('/clients', (req, res) => {
    ClientSchema.find({}, function (err, response) {
        res.send(response)
    })

})


router.post('/client', (req, res) => {
    let newClientSchema = new ClientSchema(req.body)
    newClientSchema.save()
    res.end()
})


module.exports = router