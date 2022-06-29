import { useState } from 'react';
import React from 'react';

import './App.css';


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [contacts, setContacts] = useState([])


  const addContacts = (e) => {
    e.preventDefault();
    const newContacts = {
      firstName,
      lastName,
      address,
      phoneNumber
    }

 
    setContacts([...contacts, newContacts]);
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhoneNumber("");
  }

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  }

  const updateLastName = (e) => {
    setLastName(e.target.value);
  }
  
  const updateAddress = (e) => {
    setAddress(e.target.value);
  }
  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const contactsList = contacts.map((contact) => (
    <li key={contact.id}>
        <div className="contacts">
            <ul>
                <li>{contact.firstName}</li>
                <li>{contact.lastName}</li>
                <li>{contact.address}</li>
                <li>{contact.phoneNumber}</li>
            </ul>
        </div>
    </li>
  ));


  

    return (

    <div className="App">
      
      <form onSubmit={addContacts}>
        <h2>Contact Information</h2>
        <label htmlFor=""> First Name:
        <input value={firstName} onChange={updateFirstName} type="text" id='firstName'/>
        </label> <br />
        <label htmlFor=""> Last Name:
        <input value={lastName} onChange={updateLastName} type="text" id="lastName"/>
        </label> <br />
        <label htmlFor=""> Address:
        <input type="text"  value={address} onChange={updateAddress} id="address" />
        </label> <br />
        <label> Phone Number:
        <input type="text" value={phoneNumber} onChange={updatePhoneNumber} name="phoneNumber" />
        </label><br />
        <button type="submit">Save</button>
      </form>

      <ol className='contacts'>
        {contactsList}
      </ol>


    </div>

  
  );
  
  
}
export default App;
