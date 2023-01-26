import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSelector } from "react-redux";
import Login from '../Pages/LoginPage/LoginPage';
import Signup from '../Pages/SignupPage/SignupPage';
import MailVerify from '../Pages/MailVerification/MailVerification';
import EmailReset from '../Pages/EmailReset/EmailReset';
import MailVerifyReset from '../Pages/MailVerifyReset/MailVerifyReset';
import ResetPassword from '../Pages/PasswordRest/PasswordReset';
import ResetPasswordMail from '../Pages/EmailResetPassword/EmailReset';
import Home from '../Pages/Home/Home'

export const RouteManagement = () => {
    const user = useSelector((state) => state.authReducer.authData)
    return (
        <>
            <Routes>
               
                <Route path="/" element={user&&user.message=== "User Login succcessful"?<Home /> : <Login />} />
                <Route path="/home" element={user&&user.message=== "User Login succcessful" ? <Home /> : <Login />} />
                <Route path="/auth" element={user&&user.message=== "User Login succcessful" ? <Home /> : <Login />} />
                <Route path="/signup" element={user&&user.message=== "User Login succcessful" ? <Home /> : <Signup />} />
                <Route path="/mailVerify" element={user&&user.message=== "User Login succcessful" ? <Home /> : <MailVerify />} />
                <Route path="/mailVerifyReset" element={user&&user.message=== "User Login succcessful" ? <Home /> : <MailVerifyReset />} />
                <Route path="/changeMail" element={user&&user.message=== "User Login succcessful" ? <EmailReset /> : <EmailReset />} />
                <Route path="/resetPasswordMail" element={user&&user.message=== "User Login succcessful" ? <ResetPasswordMail /> : <ResetPasswordMail />} />
                <Route path="/resetPassword" element={user&&user.message=== "User Login succcessful" ? <Home /> : <ResetPassword />} />
            </Routes>
        </>
    )
}
