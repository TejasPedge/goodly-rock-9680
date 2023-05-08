import {
  AuthRequest_Made,
  AuthRequest_Success,
  AuthRequest_Failed,
} from "./type";

const initState = JSON.parse(localStorage.getItem("UserDetails")) || {
  name: "",
  email: "",
  token: "",
  isLoading: false,
  isLoggedIn: false,
  isError: false,
};

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AuthRequest_Made:
      return { ...state, isLoading: true };
    case AuthRequest_Success:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        name: payload.user,
        email: payload.email,
        token: payload.token,
      };
    case AuthRequest_Failed:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
