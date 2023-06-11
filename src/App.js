import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Donor from './components/Donor';
import Mission from './components/Mission';
import "./App.css"
import Login from './components/Login'
import Contact from './components/Contact';
import Details from './components/Details';
import AgentDetails from './components/AgentDetails';
function App() {

  return (
    <>
<Routes>

      <Route exact path='/' element={<Home></Home>}></Route>
      <Route  exact path='/donor' element={<Donor></Donor>} ></Route>
      <Route  exact path='/donor/details' element={<Details></Details>} ></Route>
      <Route  exact path='/donor/agentdetails' element={<AgentDetails></AgentDetails>} ></Route>
      <Route path='/mission' element={<Mission></Mission>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

</Routes>

      

</>
 
  )
}




      
 
export default App;
