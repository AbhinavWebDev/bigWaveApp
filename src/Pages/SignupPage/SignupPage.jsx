import React from 'react'
import { useDispatch } from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./SignUpPage.css"
import { logOut, signUp } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';
import { sendOTP } from '../../Redux/Actions/AuthAction';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();

  const Authdata = useSelector((state) => state.authReducer.signData)
  const [userExist,setUserExist]=React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({
    full_name: "",
    gender: "",
    pu_college: "",
    place: "",
    ph_num: "",
    referral_code: "",
    email: "",
    password: "",

  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClickLogin = (e) => {
     e.preventDefault();

     dispatch(signUp(data));
    console.log("data",data);
  };

  const handleClickAlert=()=>{
    setOpen(true);
  }
 


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  useEffect(()=>{
    if(Authdata&&Authdata.msg==='The given email id is already taken'){
      setOpen(true);
    }
    else if(Authdata&&Authdata.message==='User Registered sucessfully!'){
      dispatch(sendOTP(Authdata.json.id));
      navigate('/mailVerify')
      console.log("working navigate");
      
    }
  },[Authdata])
  
  

  console.log("userstatus",userExist);

  return (
    <>
  
    <div className="Signup1">
      <div className="card1">
        <div className="image">
          <p>BigWave!</p>
        </div>

        <form>

          <div style={{display:"flex"}}>
          <TextInput
            mt="sm"
            label="Full Name"
            placeholder="Enter Full Name"
            name="full_name"
            onChange={handleChange}
            value={data.full_name}
            style={{margin:"10px"}}
          />

<FormControl  sx={{ mt: 4,ml: 2, minWidth: 220 }} size="small">
      <InputLabel id="demo-select-small">Gender</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        name="gender"
        value={data.gender}
        label="Gender"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"male"}>Male</MenuItem>
        <MenuItem value={"famale"}>Female</MenuItem>
      </Select>
    </FormControl>
            
          </div>

         
          <TextInput
            mt="sm"
            label="PU College"
            placeholder="Enter College Name"
            name="pu_college"
            onChange={handleChange}
            value={data.pu_college}
          />


            
        
          <div style={{display:"flex"}}>
          <TextInput
            mt="sm"
            label="Place"
            placeholder="Enter Place Name"
            name="place"
            onChange={handleChange}
            value={data.place}
            style={{margin:"10px"}}
          />

<TextInput
            mt="sm"
            label="Phone Number"
            placeholder="Enter Phone Number"
            name="ph_num"
            onChange={handleChange}
            value={data.ph_num}
            style={{margin:"10px"}}
          />
            
          </div>
          <TextInput
            mt="sm"
            label="Referral Code"
            placeholder="Enter Referral Code"
            name="referral_code"
            onChange={handleChange}
            value={data.referral_code}
          />

          <TextInput
            mt="sm"
            label="Email"
            placeholder="Enter Email ID"
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
        <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClickLogin} >Submit</Button>
        <hr />
        <h6 style={{color:"black",margin:"20px",textAlign: "center",cursor:"pointer"}}  onClick={()=>{{navigate("/")} {dispatch(logOut())}}}>Already have an account?</h6>
      </div>

      
    </div>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Email Already Exist!
        </Alert>
      </Snackbar>
    </Stack>
    </>
  );
}




