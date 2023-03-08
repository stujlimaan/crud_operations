import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userAdd } from "../redux/actions";


function Add() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;
  const [error,setError] = useState()
  const navigate = useNavigate();
  const handleInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(e);
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("submit")
    if(!name || !email || !contact || !address){
      setError("Please filled all field ")
    }else{
      dispatch(userAdd(state))
      navigate("/")
      setError("")
      // window.reload("")
    }
  }
  return (
    <div>
      <h1>add user</h1>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
      <br></br>
      {error && <h3 style={{color:"red"}}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        {/* <InputLabel>Name</InputLabel> */}
        {/* <Input></Input> */}
        <TextField
          id="outlined-basic"
          label="name"
          value={name}
          name="name"
          type="text"
          onChange={handleInput}
        ></TextField>
        <br></br>
        <TextField
          id="outlined-basic"
          placeholder="enter your email"
          label="email"
          value={email}
          name="email"
          type="email"
          onChange={handleInput}
        ></TextField>
        <br></br>
        <TextField
          id="outlined-basic"
          placeholder="enter your contact"
          label="contact"
          name="contact"
          value={contact}
          type="number"
          onChange={handleInput}
        ></TextField>
        <br></br>
        <TextField
          id="outlined-basic"
          placeholder="enter your address"
          label="address"
          name="address"
          value={address}
          type="text"
          onChange={handleInput}
        ></TextField>
        <br></br>
        <Button color="primary" variant="contained" type="submit">
          Add user
        </Button>
        <br></br>
      </form>
    </div>
  );
}

export default Add;
