import React, { useState } from 'react'
import firebase from './firebase'
const Details = () => {


    const[allDocs,setAllDocs]=useState([])
    const[singleDoc,setSingleDoc]=useState({})

    const db=firebase.firestore();

function fetchAll(e)
{
  e.preventDefault();

  db.collection("foodDetails")
  .get()
  .then((snapshot)=>{
    if(snapshot.docs.length>0)
    {
        snapshot.docs.forEach((doc)=>{
            setAllDocs((prev)=>{
                return[...prev,doc.data()]
            })
        })
    }
  })
  console.log(allDocs);
}


  return (
    <div>
      <h2>Fetch Data</h2>
      <button onClick={fetchAll}>Show Food Details</button>
    </div>
  )
}

export default Details
