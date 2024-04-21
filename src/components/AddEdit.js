import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import "./Home.css";
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  contact: "",
}

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { name, email, contact } = state;
  const navigate = useNavigate();

  const {id} = useParams();
  useEffect(()=>{
    if(id){
      getSingleUser(id);
    }
  },[id])
  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:5000/user/${id}`);  
              if(response.status === 200) {
                 setState({...response.data[0]});
                } 
  }

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:5000/user", data)
    if (response.status === 200) {
      toast.success(response.data)
    }
  }
  
  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:5000/user/${id}`, data)
    if (response.status === 200) {
      toast.success(response.data)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please provide Value into each input field")
    } else {
      if(!id){
        addUser(state);
      }else{
        updateUser(state,id)
      }
     
      setTimeout(() => navigate("/borrowers", { state: { yourData: 'some data' } }), 500);
    }
  }

  const handleInputChange = (e) => {
    let { name, value } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
 
  console.log(state)
  return (
    <div style={{ marginTop: "100px" }}>
      <form style={{ margin: "auto", padding: "15px", maxwidth: "400px", alignContent: "center" }} onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder='Enter Name ....'
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor='email'>Email</label>
        <input type="email" id="email" name="email" placeholder='Enter Email ....' onChange={handleInputChange} value={email} />
        <label htmlFor='contact'>Contact</label>
        <input type="number" id="contact" name="contact" placeholder='Enter Contact No.....' onChange={handleInputChange} value={contact} />
        <input type="submit" value={id? "Update" : "Add"}/>
      </form>
    </div>
  )
}

export default AddEdit