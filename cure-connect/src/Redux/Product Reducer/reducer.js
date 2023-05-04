import { ProductRequest_Made,ProductRequest_Success,ProductRequest_Failed } from "./type";

const initialState = {
    isLoading : false,
    products : [],
    isErr : false,
}

export const reducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ProductRequest_Made    :  return {...state, isLoading: true};
        case ProductRequest_Success :  return {...state, isLoading: false, products : payload};
        case ProductRequest_Failed  :  return {...state, isLoading: false, isErr : true};
        default : return state;
    }
}