import React  from "react";
import { useEffect } from 'react';
import { useDispatch ,useSelector} from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn, logOut } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const authData = useSelector((state) => state.authReducer.authData)
  const [open, setOpen] = React.useState(false);
  const [openSucess, setOpenSuccess] = React.useState(false);
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClickLogin = (e) => {
     e.preventDefault();

    dispatch(logIn(data));
    console.log("data",data);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    setOpenSuccess(false);
  };
  

  useEffect(()=>{
    if(authData&&authData.message==='Email or Password is incorrect,Try again!'){
      setOpen(true);
    }
    else if(authData&&authData.message==='User Login succcessful'){
      navigate('/')
      setOpenSuccess(true);
      
    }
  },[authData])



  return (
    <>
    <div className="login">
      <div className="card">
        <div className="image">
          <p>Welcome Back!</p>
        </div>

        <form>
          <h3>Log In </h3>

          <TextInput
            mt="sm"
            label="Email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
            value={data.email}
          />

          <PasswordInput
            label="Password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />

          
        </form>
        <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClickLogin} >Log In</Button>
        <h6 style={{color:"black",margin:"20px",textAlign: "center",cursor:"pointer"}}  onClick={()=>{{navigate("/resetPasswordMail")} {dispatch(logOut())}}}>Forgot Password ?</h6>
        <hr />

       
          <Button variant="contained" mt="sm" onClick={()=>{{navigate("/signup")} {dispatch(logOut())}}} >
            Create New Account
          </Button>
       
      </div>
    </div>
    <Stack spacing={2} sx={{ width: '100%' }}>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      Email or Password is incorrect,Try again!!
      </Alert>
    </Snackbar>
    <Snackbar open={openSucess} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      LogIN Success!
      </Alert>
    </Snackbar>
  </Stack></>
  );
}
