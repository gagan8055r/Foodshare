import React,{useState}  from "react";
import "./Contact.css";

const Contact = () => {
const [userData, setUserdata] = useState({
    name:"",
    email:"",
  });
 
  let name,value;
  const postChange=(e)=>{
name=e.target.name;
value=e.target.value;

setUserdata({...userData,[name]:value})

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name,email}=userData;
    const res=await fetch('https://foodconnect-a8083-default-rtdb.firebaseio.com/userDataRecord/contactRecord.json',
      {  method:'POST',
      headers:{
      'Content-Type':'application/json',
  },
  body:JSON.stringify({
    email,
   name,
  }),
    }
    );
 if(res)
 {
  setUserdata({
    email:"",
   name:"",
  })
  alert("Thanks for contacting us")
 }
 else
 {
  alert("Please fill the data")
 }
  };
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Feel Free to Contact Us</h2>

      <div className="contact-form">
        <form
          action=""
          method="POST"
          className="form-inputs"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
            width="200px"
            value={userData.name}
            onChange={postChange}
            required className="input-contact"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
             value={userData.email}
            onChange={postChange}
            autoComplete="off"
            required className="input-contact" 
            
          />

                 <button type="submit" className="submit-button">
            Send
          </button>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7796.074706171997!2d76.60598065689135!3d12.313271456861496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7ae94fffffff%3A0x1ad797cbfc78d07a!2sJSS%20Science%20and%20Technology%20University%2C%20Mysuru.!5e0!3m2!1sen!2sin!4v1685724620613!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </form>
      </div>
    </div>
  );
};

export default Contact;
