import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'; // right!
import Home from './Components/Home';
import Support from './Components/Support';
import About from './Components/About';
import Labs from './Components/Labs';
import Notfound from './Components/Notfound'; // right!
// right!


function App() {
  
  return (

    <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/support">Support</NavLink>
              </li>
            <li>
              <NavLink to="/about">About</NavLink>
              </li>
            <li>
              <NavLink to="/labs">Labs</NavLink>
              </li>
          </ul>
        </nav>




      <Routes>
        <Route path = "/" element = {<Home/>} >
        <Route path = "/support" element = {<Support/>} />
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/labs" element = {<Labs/>}/>
        <Route path = "/*" element = {<Notfound/>}/> 
         </Route>
      </Routes>
    </div>

  )
}

export default App
