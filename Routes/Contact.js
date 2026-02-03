const express = require('express')
const { AddContact, GetAllContacts, GetOneContact, UpdateContact, DeleteContact } = require('../Controllers/Contact')


const contactRouter = express.Router()

contactRouter.post('/addContact', AddContact)


contactRouter.get('/getAllContacts', GetAllContacts)


contactRouter.get('/getOneContact/:id', GetOneContact)


contactRouter.put('/updateContact/:id', UpdateContact)


contactRouter.delete('/deleteContact/:id', DeleteContact)


module.exports = contactRouter