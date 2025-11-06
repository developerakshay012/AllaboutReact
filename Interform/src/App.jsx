import React, { useState } from 'react'
import './App.css'
const App = () => {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")

  // console.log(firstName);
  // console.log(lastName);
  
  // function changeFirstHandler(event) {
  //   // Implement your logic here to save the first name to a database or use it for further processing.
  //   setFirstName(event.target.value)
  // }

  // function changeLasthandler(event) {
    
  //   // Implement your logic here to save the last name to a database or use it for further processing.
  //   setLastName(event.target.value)
   
  // }

  const [formData, setFormData] = useState( {firstName: "", lastName: "" ,email: "",
     phone: "" ,comment: "",isVisible: false , mode:"" , favCar:""})



  function changeHandler(event) {
    const{name,value,type,checked} = event.target;

    setFormData(prevFormData => {
      return {...prevFormData,
        // [event.target.name ]: event.target.value
        [name]: type === 'checkbox'? checked : value

      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finallly printing all the Data");
    console.log(formData);
  }



  return (
    <div className='App'>
      <form onSubmit={submitHandler}>


        <input 
        type="text" 
        placeholder='First name...' 
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}/>

        <br />
        <br />

        <input type="text"
        placeholder='Last name...' 
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}/>
        
        <br />
        <br />

        <input type="email"
        placeholder='Enter your email...' 
        onChange={changeHandler}
        name='email'
        value={formData.email}/>


        <br />
        <br />

        <input type="number"
        placeholder= 'Enter your phone number...' 
        onChange={changeHandler}
        name='phone'
        value={formData.phone}/>


        <br />
        <br />
        
        <textarea
        placeholder= "Enter your comment"
        onChange={changeHandler}
        name = "comment"
        value={formData.comment}/>

        <br />
        <br />


        <input 
        type="checkbox" 
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked={formData.isVisible}
        />

        <label htmlFor="isVisible">AM i visible ?</label>

      <br />
      <br />

      <fieldset>

      <input type='radio' 
      name="mode"
      onChange={changeHandler}
      value= "Online-mode" 
      id="Online-mode"
      checked = {formData.mode === "Online-mode"}
      />
      <label htmlFor="Online-mode">Online-mode</label>

      <br />
      <br />

      <input type='radio' 
      name="mode"
      onChange={changeHandler}
      value= "Offline-mode" 
      id="Offline-mode"
      checked = {formData.mode === "Offline-mode"}
      />
      <label htmlFor="Offline-mode">Offline-mode</label>

    </fieldset>


    <label htmlFor="favCAr">Tell me your fav car ?</label>

    <br />


    <select 
    name='favCar'
    onChange={changeHandler}
    id='favCar'
    value={formData.favCar}
    >
      <option value="scorpio">Scorpio</option>
      <option value="Thar">Thar</option>
      <option value="fortuner">Fortuner</option>
      <option value="tata">Tata</option>
      <option value="bmw">Bmw</option>
      <option value="audi">Audi</option>
    </select>

    {/* <input type="Submit" 
    value='submit'/> */}

      <br />

      <button >Submit</button>











      </form>
      </div>
  )
}

export default App;