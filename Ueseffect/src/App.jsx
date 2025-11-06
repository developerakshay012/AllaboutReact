import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const[text,setText] = useState('');
  const[name,setName] = useState('Akshay');

  // useEffect (() => {
  //   console.log("ui rendrenig done ");
  // })


  // variation 2
  // useEffect(() => {
  //   console.log("ui rendrenig done ");
  // } ,[])


  // variation 3 whenevber dependency passed
  // useEffect( () =>{
  //   console.log("change detected ");
  // } , [name])

// variation 4 handle the unmounting of a component

useEffect(() => {
  console.log("listner added");

  return () => { 
    console.log("listner removed")}
},[text]);


  function changeHandler(event){
    console.log(text);
    setText(event.target.value)
  }


  return (
    <div className='app'>
      <input type="text" onClick={changeHandler} />
    </div>
  )
}

export default App;
