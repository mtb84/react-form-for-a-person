import { useState } from 'react';
import './App.css';


function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [posts, setPosts] = useState([])


  const addPost = (e) => {
    const newPost = {
      firstName,
      lastName,
      address,
      phoneNumber
    }
 

    setPosts([...posts, newPost]);
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

  

    return (

    <div className="App">
   
    <form onSubmit={addPost}>
    <h2>Contact Information</h2>
    <label htmlFor=""> First Name:
    <input value={firstName} onChange={updateFirstName} type="text" name='firstName'/>
    </label> <br />
    <label htmlFor=""> Last Name:
    <input value={lastName} onChange={updateLastName} type="text" name="lastName"/>
    </label> <br />
    <label htmlFor=""> Address:
    <input type="text"  value={address} onChange={updateAddress} name="address" />
    </label> <br />
    <label> Phone Number:
    <input type="text" value={phoneNumber} onChange={updatePhoneNumber} name="phoneNumber" />
    </label><br />
    <button  type="submit">Save</button>
    </form>
    </div>

  
  );
  
}
export default App;
