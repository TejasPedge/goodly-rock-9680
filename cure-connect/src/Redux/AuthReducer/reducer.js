import { AuthRequest_Made,AuthRequest_Success,AuthRequest_Failed } from "./type";

const initialState = {
    isLoading : false,
    isAuth : false,
    isErr : false,
}

export const reducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case AuthRequest_Made    :  return {...state, isLoading: true};
        case AuthRequest_Success :  return {...state, isLoading: false, isAuth : true};
        case AuthRequest_Failed  :  return {...state, isLoading: false, isErr : true};
        default : return state;
    }
}