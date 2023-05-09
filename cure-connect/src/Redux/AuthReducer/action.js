import axios from "axios";
import {
  AuthRequest_Made,
  AuthRequest_Success,
  AuthRequest_Failed,
} from "./type";

export const loginReqAction = () => {
  return { type: AuthRequest_Made };
};
export const loginSuccessAction = (payload) => {
  return { type: AuthRequest_Success, payload };
};
export const loginFailAction = () => {
  return { type: AuthRequest_Failed };
};

export const login = (data) => (dispatch) => {
  dispatch(loginReqAction());

  return axios
    .post(process.env.REACT_APP_BASE_URL + `/users/login`, data)
    .then((res) => {
      console.log(res);
      dispatch(loginSuccessAction(res.data.user));
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({ isLoggedIn: true, user: res.data.user })
      );
      return res.data.user;
    })
    .catch((err) => {
      dispatch(loginFailAction());

      // if (err.response.data == "Incorrect password ") {
      //   alert("Incorrect Password. Try again.");
      // } else if (err.response.data == "User not register") {
      //   alert("Email is not registerd.");
      // }
    });
};
