import * as AuthApi from "../../Api/AuthRequest";
import * as UpdateApi from "../../Api/UpdateRequest";

export const logIn = (formData) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "LOGIN_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOGIN_FAIL" });

  }
};


export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};

export const signUp = (formData) => async (dispatch) => {
  dispatch({ type: "SIGNUP_AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "SIGNUP_AUTH_SUCCESS", data: data });
    console.log("data",data);
  } catch (error) {
    dispatch({ type: "SIGNUP_AUTH_FAIL" });
  }
};

export const mailVerify = (formData) => async (dispatch) => {
  dispatch({ type: "MAIL_VERIFY_START" });
  try {
    const { data } = await AuthApi.mailVerify(formData);
    dispatch({ type: "MAIL_VERIFY_SUCCESS",data: data });
    console.log("data",data);
  } catch (error) {
    dispatch({ type: "MAIL_VERIFY_FAIL" });
  }
};






export const changeMail = (formData) => async (dispatch) => {
  dispatch({ type: "CHANGE_MAIL_START" });
  try {
    const { data } = await UpdateApi.changeMail(formData);
    dispatch({ type: "CHANGE_MAIL_SUCCESS",data: data });
    console.log("data",data);
  } catch (error) {
    dispatch({ type: "CHANGE_MAIL_FAIL" });
  }
};

export const sendOTP = (formData) => async (dispatch) => {
  dispatch({ type: "SEND_OTP_START" });
  try {
    const { data } = await UpdateApi.sendOTP(formData);
    dispatch({ type: "SEND_OTP_SUCCESS"});
    console.log("data",data);
  } catch (error) {
    dispatch({ type: "SEND_OTP_FAIL" });
  }
};


export const updatePassword = (formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_PASSWORD_START" });
  try {
    const { data } = await UpdateApi.updatePassword(formData);
    dispatch({ type: "UPDATE_PASSWORD_SUCCESS"});
    console.log("data",data);
  } catch (error) {
    dispatch({ type: "UPDATE_PASSWORD_FAIL" });
  }
};

export const passwordResetEmail = (formData) => async (dispatch) => {
  dispatch({ type: "MAIL_UPDATE_PASSWORD_START" });
  try {
    const { data } = await UpdateApi.passwordResetEmail(formData);
    dispatch({ type: "MAIL_UPDATE_PASSWORD_SUCCESS",data: data});
    console.log("MAIL_UPDATE_PASSWORD_SUCCESS",data);
  } catch (error) {
    dispatch({ type: "MAIL_UPDATE_PASSWORD_FAIL" });
  }
};





