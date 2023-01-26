import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Center, PasswordInput, TextInput } from "@mantine/core";
import "./LoginPage.css";
import { logIn } from "../../Redux/Actions/AuthAction";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { updatePassword } from "../../Redux/Actions/AuthAction";

export default function Login() {
  const dispatch = useDispatch();
  const navigate  = useNavigate();
  const signData = useSelector((state) => state.authReducer.signData)
  const [data, setData] = useState({
    id: signData.json.id,
    newPassword:"",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleClickSubmit = (e) => {
    // e.preventDefault();

     dispatch(updatePassword(data));
     navigate('/')
    console.log("Change Password");
  };

  return (
    <div className="Signup">
      <div className="card">
        <div className="image">
          <p>Reset Password!</p>
        </div>

        <form>

          <TextInput
            mt="sm"
            label="New Password"
            placeholder="New Password"
            name="newPassword"
            onChange={handleChange}
            value={data.newPassword}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={data.confirmPassword}
          />

          
        </form>
        <Button variant="contained" style={{ marginTop:"15px" }} onClick={handleClickSubmit} >Submit</Button>
      </div>
    </div>
  );
}
