import React from 'react'
import "./Home.css"
import { Button } from '@mui/material'



const Home = () => {
  return (



     <div>

  <nav class="navbar">
  <div class="navbar-logo">
    
  <a href="/" style={{ fontStyle: 'italic', fontSize: '25px',color:"black"}} className='title-name'>FoodConnect</a>

  </div>
  <ul class="navbar-links">
   



     
    
  <Button sx={{margin:3}} variant='contained'> <li><a href="/"style={{color:"white"}} >Home</a></li></Button>
   <Button sx={{margin:3}} variant='contained'><li><a href="/mission" style={{color:"white"}}>Mission</a></li></Button> 
   <Button   sx={{margin:3}} variant='contained' > <li><a href="/donor" style={{color:"white"}} >Donor Login</a></li></Button>
    <Button sx={{margin:3}} variant='contained'><li><a href="/login" style={{color:"white"}}>Agent Login</a></li></Button>
 <Button sx={{margin:3}} variant='contained'> <li><a href="/contact" style={{color:"white"}} >Contact Us</a></li></Button>


  </ul>
</nav>


  <div style={{ textAlign: 'center' }} className="container">
      <h1 style={{ fontStyle: 'italic', fontSize: '30px',color:"white" }}>Small Effort <br></br>Make Big Change </h1>
    </div>
  </div>
  )
}
export default Home
