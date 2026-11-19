import { useState } from "react"

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('')

  const submitHandlier = (e) => {
    e.preventDefault();
    console.log("form Submitted");
    console.log("Name :", name);
    console.log("Email :", email);
    console.log("Password :", pass);

  }

  // About LocalStorage
  const user = {
    username: "Siddhi",
    age: 23,
    city: "pune"
  };
  localStorage.setItem('user', JSON.stringify(user));
  const u = JSON.parse(localStorage.getItem('user'));
  console.log((u));


  return (
    <div>
      <form onSubmit={submitHandlier} >
        <input type="text"
          placeholder='Enter Name'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }} />
        <input type="Email"
          placeholder='Enter Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input type="password"
          placeholder='Enter Password'
          value={pass}
          onChange={(e) =>
            setPass(e.target.value)
          }
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
