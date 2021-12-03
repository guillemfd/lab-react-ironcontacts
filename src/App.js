import './App.css'
import contacts from './contacts.json'
import React, { useState } from 'react'

function App() {
  // const myFirstState = useState(0)
  // const contactList = myFirstState(contacts.slice(0, 5))
  // const setContactList = myFirstState

  // const myFirstState = useState(0)
  // const counter = myFirstState[0]
  // const setCounter = myFirstState[1]

  // Iteration 1 ----------------- slice ---------
  const [contactList, setContactList] = useState(contacts.slice(0, 10)) //pongo 10 para ver alguna 🏆

  // Iteration 3 ---- añadiendo actor random -------
  const [unseenContacts, setUnseenContacts] = useState(contacts.slice(10)) 
    //nuevo array sin los 10 primeros

  function randomContact() {
    //función para crear un actor random
    const random = Math.floor(Math.random() * unseenContacts.length)
    // contactList.splice(random, 1);
    return unseenContacts[random]
  }

  function addContact() {
    //función para añadir actor random a la lista

    const randContact = randomContact()

    const copyUnseenContacts = unseenContacts.filter(contact => {
      return randContact.id !== contact.id
    })

    setContactList([...contactList, randContact])
  
    setUnseenContacts(copyUnseenContacts)//xq no funciona con un push?
  }

  //Iteration 4 ---------- Sorting By -----
  const sortByPopularity = () => {
    const popularityList = contacts.sort((a, b) => {
      return b.popularity - a.popularity
    })

    setContactList([...popularityList]) //...para crear un array nuevo sin modificar el inicial
  }

  const sortByName = () => {
    const namesList = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    setContactList([...namesList])
  }

  //Iteration 5 ------------ Delete --------------- no hay manera de que funcione bien...-------------------
  const deleteContact = (id) => {
    const filteredContacts = contactList.filter((contact) => {
      return contact.id !== id
    })
    setContactList(filteredContacts)
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emy</th>
        </tr>
        {contactList.map((contact, i) => (
          <tr key={i}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name} />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            {/* //Iteration 2 --------------------------------Iteration 2--------------- */}
            <td>{contact.wonOscar === true ? '🏆' : ''}</td>
            <td>{contact.wonEmmy === true ? '🏆' : ''}</td>
            <td>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
export default App
