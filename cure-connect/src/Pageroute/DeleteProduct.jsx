import React, { useEffect, useState } from 'react'
import { dltProduct, getProduct } from '../allApi'
import { SideBar  } from "../Components/SideBarAdmin"
import styles from "../styles/admin.module.css";

export const DeleteProduct = () => {

    const [products , setProducts] = useState([])

    const handelDelete = (id) => {
        alert("Product Deleted Successfully")
        console.log(id)
        dltProduct(id)
    }
    console.log(products)

    useEffect(()=>{
        getProduct().then((res)=> setProducts(res.data))
    },[])


  return (
    <div className={styles.dltMainBox}>
        <SideBar />

    <div className={styles.proMainBox}>

        {products.map((itm)=>(
            <div key={itm.id} className={styles.dltproChild}>

                <img src={itm.image[0]} alt="" />
                <h3>{itm.category}</h3>
                <h3>{itm.price}</h3>
                <button onClick={()=>handelDelete(itm._id.$oid)}>Delete Product</button>
            </div>
        ))}

    </div>

    </div>
  )
}

