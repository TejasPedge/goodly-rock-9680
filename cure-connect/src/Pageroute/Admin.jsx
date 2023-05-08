import React from 'react'
import styles from "../styles/admin.module.css";
import { SideBar } from "../Components/SideBarAdmin"
const Admin = () => {
    return (
        <div>
          <h1 className={styles.adTit}>Welcome To Admin Pannel 👋</h1>
    
          <div className={styles.adminMainBox}>
            {/* ---SIdeBAr---- */}
    
            {/* <div className={styles.adminSideBar}>
    
            <div className={styles.adminSideBarImg}><img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="" /></div>
            <div className={styles.sideBtns}>Add New Product</div>
            <div className={styles.sideBtnsDlt}>Delete Product</div>
            <div className={styles.sideBtns}>Edite Product</div>
    
            </div> */}
            <SideBar />
    
            {/* ----MainBAr---- */}
            <div className={styles.adminUserDetail}>
              {/* ---Slae bOx--- */}
    
              <div className={styles.adminTotSaleBox}>
                <div className={styles.saleMiniBox}>
                  <div className={styles.saleImg}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRzqL4YHAEjNTGofBgFfJbypGpuc-taqO2Q"
                      alt=""
                    />
                  </div>
                  <h3>New Orders</h3>
                  <h5>5500</h5>
                </div>
    
                <div className={styles.saleMiniBox}>
                  <div className={styles.saleImg}>
                    <img
                      src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                      alt=""
                    />
                  </div>
                  <h3>Total Orders</h3>
                  <h5>5500</h5>
                </div>
    
                <div className={styles.saleMiniBox}>
                  <div className={styles.saleImg}>
                    <img
                      src="https://media.istockphoto.com/id/1332254909/vector/growth-profit-icon-vector-business-and-finance-concept-for-graphic-design-logo-web-site.jpg?s=612x612&w=0&k=20&c=oDKkkH3TtRzsPcteUhOexQLW1SdxFF-7-ji_txeQ1uk="
                      alt=""
                    />
                  </div>
                  <h3>Total Revenue</h3>
                  <h5>5500</h5>
                </div>
    
                <div className={styles.saleMiniBox}>
                  <div className={styles.saleImg}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      alt=""
                    />
                  </div>
                  <h3>Total Users</h3>
                  <h5>5500</h5>
                </div>
              </div>
    
              {/* ----main detailBox---- */}
    
              <div className={styles.mainDetailBox}>
    
                <div className={styles.mainDetaBox1}>
                  <h1>Weekly Sales Details</h1>
                  <hr />
                  <div className={styles.detailBoxMini}>
                    <div className={styles.detailBoxTIt}><h1>Total Orders</h1></div>
                    <div className={styles.detailBoxNUmGreen}><h1>220</h1></div>
                  </div>
    
                  
                  <div className={styles.detailBoxMini}>
                    <div className={styles.detailBoxTIt}><h1>Total  Revenue</h1></div>
                    <div className={styles.detailBoxNUmGreen}><h1>₹ 55500</h1></div>
                  </div>
    
                  <div className={styles.detailBoxMini}>
                    <div className={styles.detailBoxTIt}><h1>Total Canceled Order</h1></div>
                    <div className={styles.detailBoxNUmGreen}><h1>72</h1></div>
                  </div>
    
    
                  <div className={styles.detailBoxMini}>
                    <div className={styles.detailBoxTIt}><h1>Total Deliverd Order</h1></div>
                    <div className={styles.detailBoxNUmGreen}><h1>110</h1></div>
                  </div>
    
    
                </div>
    
                <div className={styles.mainDetaBox2}>
                  <img src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content-gh/en/_mdb5/standard/web/docs/design-blocks/admin/charts/assets/2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Admin