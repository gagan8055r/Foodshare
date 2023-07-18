import React,{useState,useEffect} from 'react'
import "./AgentDetails.css";
import { collection,getDocs } from 'firebase/firestore'
import db from '../components/firebase'
import { useNavigate } from 'react-router-dom';



const AgentDetails = () => {
 
    const[products,setProducts]=useState({})
const [receivedData, setReceivedData] = useState(null);
    
const navigate=useNavigate()
 useEffect(() => {


  const storedData = localStorage.getItem('myData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setReceivedData(parsedData);
    
    }


  
    const fetchData = async () => {
      const colRef = collection(db, 'foodDetails');
      const snapshots = await getDocs(colRef);
      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
     
      setProducts(docs);
    };

    fetchData();
  },[]);

  const handleClick=(e)=>{
     e.preventDefault(); 
      navigate('/contact');
  }

  return (
    <div>

      {/* <button id='btn' onSubmit={handleButtonClick}>Show Food Details</button> 
        */}
    <div className='container'>
        
        {Object.keys(products).map((id) => (
          <div key={id}>
            {/* <h2>Humidity</h2><h3>{products[id].Humidity}</h3>
           <h2>Temperature</h2> <h3>{products[id].Temperature}</h3>
           <h2>LightIntensity</h2> <h3>{products[id].LightIntensity}</h3> */}
<h1>PLACE OF DONATION</h1>
      {/* {receivedData && receivedData.message ? ( */}
        <div>
          <p className='paraD'>Address of Donation  : {receivedData.address}</p>
         <p className='paraD'>Food to be donated  : {receivedData.food}</p>
          <p className='paraD'>Time of food prepared : {receivedData.time}</p>
          <p className='paraD'>Quantity  : {receivedData.quantity}</p>
          <p className='paraD'>Phone number  : {receivedData.number}</p>
          
          {/* <p>Received User: {receivedData.user}</p> */}
        </div>
      {/* ) : ( */}
        {/* <p>No data received.</p> */}
      {/* )} */}
          
       <button onClick={handleClick}>Contact Team</button>
          </div>
        ))}
      </div>
    </div>
  )
}






export default AgentDetails
