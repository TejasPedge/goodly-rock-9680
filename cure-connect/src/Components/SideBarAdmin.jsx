import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/admin.module.css";
const SideBar = () => {
    return (
        <div className={styles.adminSideBar}>
    
            <div className={styles.adminSideBarImg}><Link to="/admin" ><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" /></Link></div>
            <div className={styles.sideBtns}><Link to="/addProduct" style={{textDecoration:"none", color: "#FFF"}}>Add New Product</Link></div>
            <div className={styles.sideBtnsDlt}><Link to="/deleteProduct" style={{textDecoration:"none", color: "#FFF"}}>Delete Product</Link></div>
            <div className={styles.sideBtns}>Edite Product</div>
            </div>
      )
}

export  {SideBar}