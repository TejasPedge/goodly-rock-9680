import axios from "axios"
const url="https://wild-pink-slug-sock.cyclic.app/product";

export const addNewProduct =  (newProduct) => {
    axios.post(url , newProduct);
}

export const getProduct = ()=>{
   return axios.get(url)
}

export const dltProduct = (id) =>{
    console.log(id)
    axios.delete(`https://wild-pink-slug-sock.cyclic.app/product/delete/${id}`)
    
}