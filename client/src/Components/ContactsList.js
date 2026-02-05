import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllContacts } from '../Redux/Actions'
import ContactCard from './ContactCard'

const ContactsList = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllContacts())
  },[])

  const contacts = useSelector(state => state.contacts)
  return (
    <div>
      {
        contacts.map((el,i,t)=> <ContactCard key={el._id} el={el}/>)
      }
    </div>
  )
}

export default ContactsList