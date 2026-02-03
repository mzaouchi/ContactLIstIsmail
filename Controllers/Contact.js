const Contact = require("../Models/Contact")

exports.AddContact = async(req, res)=>{
    try {

        const found = await Contact.find({email : req.body.email})

        if (found.length != 0 ) {
            return res.status(400).send({msg : "Email already exists"})
        }

        if (req.body.age < 18) {
            return res.status(400).send({msg : "Young"})
        }
        const contacttoadd = new Contact(req.body)

        await contacttoadd.save()

        res.status(200).send({msg : "Contact Added", contacttoadd})


    } catch (error) {
        res.status(500).send({msg : "Could not add contact"})
    }
}

exports.GetAllContacts =  async(req, res)=>{
    try {
        const contacts = await Contact.find()

        res.status(200).send({msg : "List of contacts", contacts})
    } catch (error) {
        res.status(500).send({msg : "Could not get contacts"})
    }
}

exports.GetOneContact = async(req, res)=>{
    try {
        const {id} = req.params

        const found = await Contact.findById(id)

        res.status(200).send({msg : "L9ito", found})

    } catch (error) {
        res.status(500).send({msg : "Could not get contact"})
    }
}

exports.UpdateContact = async(req, res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndUpdate(id, {$set : req.body})

        res.status(200).send({msg : "Contact updated"})


    } catch (error) {
        res.status(500).send({msg : "Could not update contact"})
    }
}

exports.DeleteContact = async(req, res)=>{
    try {
        const {id} = req.params

        await Contact.findByIdAndDelete(id)

        res.status(200).send({msg : "Contact deleted"})
    } catch (error) {
        res.status(500).send({msg : "Could not delete contact"})
    }
}