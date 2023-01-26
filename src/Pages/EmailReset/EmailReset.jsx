import React  from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn, sendOTP } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { changeMail } from "../../Redux/Actions/AuthAction";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const signData = useSelector((state) => state.authReducer.signData)
  const response = useSelector((state) => state.authReducer.response)
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    id:signData.json.id,
    email: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClickSubmit = (e) => {
    // e.preventDefault();

     dispatch(changeMail(data));
    console.log("Change Mail");
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(()=>{
    if(response&&response.msg==='The given email id is already taken'){
      setOpen(true);
    }
    else if(response&&response.message==='Email Updated sucessfully!'){
      dispatch(sendOTP(signData.json.id));
      navigate('/mailVerify')
      console.log("working navigate");
      
    }
  },[response])

  return (
    <>
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>New Email ID</p>
        </div>

        <form>

         

           <TextInput

            label="New Email"
            placeholder="Enter New Email"
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
        Email Already Exist!
        </Alert>
      </Snackbar>
    </Stack></>
  );
}
