
import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { mailVerify } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { sendOTP } from "../../Redux/Actions/AuthAction";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MailVerify() {
  const Authdata = useSelector((state) => state.authReducer.signData)
  const authData = useSelector((state) => state.authReducer.authData)
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [data, setData] = useState({
    id: Authdata.json.id,
    verification_code: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();

    dispatch(mailVerify(data));
    console.log("data",data);
  };
  
  const handleClickSend = (e) => {
     e.preventDefault();

     dispatch(sendOTP(data));
    console.log("handleClickSend");
  };

  const handleClickChangeMail = (e) => {
    e.preventDefault();
    navigate('/changeMail')

    dispatch(sendOTP(data));
   console.log("handleClickSend");
 };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenSuccess(false);
  };
  useEffect(()=>{
      if(authData&&authData.message==='Invalid verification code!'){
      setOpen(true);
      console.log("invalid");
    }
    else if(authData&&authData.message==='User Verified sucessfully!'){
      navigate('/resetPassword')
      console.log("working navigate");
      
    }
  },[authData])

  useEffect(()=>{
    if(Authdata&&Authdata.status==='success'){
     setOpenSuccess(true);
   }
   
     
   
 },[])

  return (
    <>
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>Confirm Your Email</p>
        </div>

        <form>
         

          <TextInput
            mt="sm"
            label="OTP"
            placeholder="Enter OTP"
            name="verification_code"
            onChange={handleChange}
            value={data.verification_code}
          />

        </form>
        <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClick} >Confirm</Button>
        <hr />
        <Button variant="contained" style={{ marginTop:"15px" }}onClick={handleClickChangeMail} >Change Email</Button>
           
          
        
      
       
        
           <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClickSend} >Send Code Again</Button>
 
           <h6 style={{color:"black",margin:"20px",textAlign: "center"}}  onClick={()=>{navigate("/")}}>Logout</h6>
       
      </div>
    </div>

    
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Invalid OTP!
        </Alert>
      </Snackbar>
      <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
         OTP Send!
        </Alert>
      </Snackbar>
    </Stack></>
  );
}
