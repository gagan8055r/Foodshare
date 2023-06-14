import React, { useEffect, useState } from 'react'
import './Details.css';
import { collection,doc,getDocs } from 'firebase/firestore'
import db from '../components/firebase'
import { useNavigate } from 'react-router-dom';
const Details = () => {
const navigate = useNavigate();
    const[products,setProducts]=useState({})
    const[address,setAddress]=useState('')

    
 useEffect(() => {
    const fetchData = async () => {
      const colRef = collection(db, 'foodDetails');
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      console.log(docs);
      setProducts(docs);
    };

    fetchData();
  }, []);
const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('https://foodconnect-a8083-default-rtdb.firebaseio.com/userDataRecord/addressRecord.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address,
       
      }),
    });

    if (res.ok) {
      setAddress('')
      alert("form submitted")

      navigate('/donor/details/thanks');
   
    } else {
      alert("Please fill the address");
    }
  };

  return (
    <div>

      {/* <button id='btn' onSubmit={handleButtonClick}>Show Food Details</button> 
        */}
    <div className='container'>
        <h2 style={{color:"tomato"}}> Data Fetched</h2>
        {Object.keys(products).map((id) => (
          <div key={id}>
            <h2 style={{color:"skyblue"}}>Humidity</h2><h3>{products[id].Humidity}</h3>
           <h2 style={{color:"skyblue"}}>Temperature</h2> <h3>{products[id].Temperature}</h3>
           <h2 style={{color:"skyblue"}}>LightIntensity</h2> <h3>{products[id].LightIntensity}</h3>
          </div>
        ))}
      </div>
         <form >
           
      <div className="address">


        <label htmlFor="address">Please enter the address to be donated : 
          <input type="text" value={address}
          name='address'
           id="address"
            onChange={(e) => {
              setAddress(e.target.value)
            }}
            required />
        </label>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </div>
      
            </form>
    </div>
  )
}

export default Details

