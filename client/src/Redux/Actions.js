import { GETALLCONTACTS, GETONECONTACT } from "./ActionsTypes"
import axios from "axios"
export const getAllContacts=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/contact/getAllContacts')

        dispatch(
            {
                type : GETALLCONTACTS,
                payload : res.data.contacts
            }
        )
   
    } catch (error) {
        console.log(error)
    }
}

export const addContact=(newContact, navigate)=>async(dispatch)=>{
    try {
        await axios.post('/api/contact/addContact', newContact)

        dispatch(getAllContacts())

        navigate('/ContactsList')
    } catch (error) {
        console.log(error)
    }
}

export const getOneContact=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/contact/getOneContact/${id}`)
    
        dispatch(
            {
                type : GETONECONTACT,
                payload : res.data.found
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateContact=(id, modifContact, navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/contact/updateContact/${id}`, modifContact)
  
        dispatch(getAllContacts())

        navigate('/ContactsList')
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/contact/deleteContact/${id}`)
    
        dispatch(getAllContacts())
    } catch (error) {
        console.log(error)
    }
}