import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Mission from './components/Mission';
import "./App.css"
import Login from './components/Login'
import Contact from './components/Contact';

function App() {

  return (
    <>
 <div>

 </div>
<Routes>

      <Route exact path='/' element={<Home></Home>}></Route>
      <Route  exact path='/about' element={<About></About>} ></Route>
      <Route path='/mission' element={<Mission></Mission>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>

</Routes>
      

</>
 
  )
}




      
 
export default App;