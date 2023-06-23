import React,{useState,useEffect} from 'react'
import "./AgentDetails.css";
import { collection,doc,getDocs } from 'firebase/firestore'
import db from '../components/firebase'
import { useLocation } from 'react-router-dom';


const AgentDetails = () => {
 
    const[products,setProducts]=useState({})
const loc=useLocation()
console.log(loc.state);
    
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


  return (
    <div>

      {/* <button id='btn' onSubmit={handleButtonClick}>Show Food Details</button> 
        */}
    <div className='container'>
        <h2> Data Fetched</h2>
        {Object.keys(products).map((id) => (
          <div key={id}>
            <h2>Humidity</h2><h3>{products[id].Humidity}</h3>
           <h2>Temperature</h2> <h3>{products[id].Temperature}</h3>
           <h2>LightIntensity</h2> <h3>{products[id].LightIntensity}</h3>
<h3>{loc.state.id}</h3>
           {/* <h2>loanbhjvh</h2>  */}
       
          </div>
        ))}
      </div>
    </div>
  )
}






export default AgentDetails
