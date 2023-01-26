import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { changeMail, sendOTP } from "../../Redux/Actions/AuthAction";
import { passwordResetEmail } from "../../Redux/Actions/AuthAction";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function Login() {
  const signData = useSelector((state) => state.authReducer.signData)
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClickSubmit = (e) => {
    // e.preventDefault();

     dispatch(passwordResetEmail(data));
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
    if(signData&&signData.msg==='The given email id does not exist'){
      setOpen(true);
    }
    else if(signData&&signData.status==="success"){
      navigate('/mailVerifyReset')
      console.log("working navigate");
      
    }
  },[signData])

  return (
    <>
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>Enter Your Email ID</p>
        </div>

        <form>

         

           <TextInput

            label="Email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />

          
        </form>
        <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClickSubmit} >Submit</Button>
      </div>
    </div>

<Stack spacing={2} sx={{ width: '100%' }}>
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
  <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
  The given email id does not exist!
  </Alert>
</Snackbar>
</Stack></>
  );
}
