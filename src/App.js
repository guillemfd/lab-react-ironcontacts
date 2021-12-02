import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";


function App() {
  // const myFirstState = useState(0)
  // const contactList = myFirstState(contacts.slice(0, 5))
  // const setContactList = myFirstState

  // const myFirstState = useState(0)
  // const counter = myFirstState[0]
  // const setCounter = myFirstState[1]

  const [contactList, setContactList] = useState(contacts.slice(0, 10));
  return (
    <div className="App">
    <h1>IronContacts</h1>
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
          <td><img src={contact.pictureUrl} alt={contact.name}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar === true ? "🏆" : ""}</td>
          <td>{contact.wonEmmy === true ? "🏆" : ""}</td>
        </tr>
        ))}
      </table>
    </div>
  );
}
export default App;
