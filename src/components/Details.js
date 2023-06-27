import React, { useEffect, useState } from 'react'
import './Details.css';
// import { Link } from 'react-router-dom';
import { collection,doc,getDocs } from 'firebase/firestore'
import db from '../components/firebase'
import { useNavigate } from 'react-router-dom';
// import { dataRef } from './fireBaseF';
// import Address from './Address';
// import AgentDetails from './AgentDetails';
const Details = () => {
const navigate = useNavigate();
    const[products,setProducts]=useState({})
    const[address,setAddress]=useState("")
    const[food,setFood]=useState("")
    const[time,setTime]=useState("")
    const[quantity,setQuantity]=useState("")


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
      console.log(address);
      
      // navigate({state:{id:location}})
      // <Link to={url}>Go to Receiver Page</Link>
      navigate('/donor/details/thanks');
      
    } else {
      alert("Please fill the address");
    }


const dataToSend = {
address:address,
food:food,
time:time,
quantity:quantity
    };

    localStorage.setItem('myData', JSON.stringify(dataToSend));
  
  };
  
  // const[name,setName]=useState('')
  // const handlehand=()=>{
  //   dataRef.ref().child('all').push(name)
  // }
  return (
    <div>
    {/* <div className='container'>
        <h2 style={{color:"tomato"}}> Data Fetched</h2>
        {Object.keys(products).map((id) => (
          <div key={id}>
            <h2 >Humidity</h2><h3>{products[id].Humidity}</h3>
           <h2 >Temperature</h2> <h3>{products[id].Temperature}</h3>
           <h2 >LightIntensity</h2> <h3>{products[id].LightIntensity}</h3>
          </div>
        )
        )}
      </div> */}
{/* <div>
  <input type="text"  value={name} onChange={(e)=>{
    setName(e.target.value)
  }}/>
  <button onClick={handlehand}>ADD</button>
</div> */}
         <form >
           
      <div className="address">


        <label htmlFor="address">Please enter the address of Donation : 
          <input type="text" value={address}
          name='address'
           id="address"
            onChange={(e) => {
              setAddress(e.target.value)
              
            }}
            required />
        </label>
        <label htmlFor="food">Food to be donated : 
          <input type="text" value={food}
          name='food'
           id="food"
            onChange={(e) => {
              setFood(e.target.value)
              
            }}
            required />
        </label>
        <label htmlFor="time">Time of food preparated : 
          <input type="number" value={time}
          name='time'
           id="time"
            onChange={(e) => {
              setTime(e.target.value)
              
            }}
            required />
        </label>
        <label htmlFor="time">Quantity: 
          <input type="text" value={quantity}
          name='text'
           id="text"
            onChange={(e) => {
              setQuantity(e.target.value)
              
            }}
            required />
        </label>
        <button type="button" onClick={handleSubmit} className='agentbtn'>Submit</button>
      </div>
      
            </form>
    </div>
  )
}

export default Details

