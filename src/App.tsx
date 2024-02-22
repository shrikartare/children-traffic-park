import React from 'react';
import styles from "./App.module.css"
import Header from "./components/Header"
import ImageCarousel from "./components/ImageCarousel"


function App() {

 
  return (
    <div className="App">
     <Header/>
     <ImageCarousel/>
     <div className={styles.aboutUs}>
      
        <div className={styles.imageContainer}>
         <img  src={"https://alkapuri.barodahighschool.com/pri-morning/wp-content/uploads/sites/2/2023/01/image-1_11zon-1024x683.jpg"} alt={"About Us"}/>
        </div>
        <div className={styles.infoContainer}>
          <h3>About Us</h3>
          <p><strong>Children Traffic Park </strong> gives information about traffic rules and regulations that should be followed by people.
          These park is specially for general citizens and  school going children.</p>
        </div>

     </div>
     <div className={styles.visitContainer}>
          <h2><strong>150+ children and 20+ schools have visited the traffic park since inception.</strong></h2>
         <button   className={styles.btnVisit}>Visit Traffic Park Now</button>
        </div>
        <footer className={styles.footerContainer}>
          <nav className={styles.quickLinks}>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="#aboutUs">About Us</a></li>
              <li> <a href="#contactUs">Contact Us</a></li>
              <li> <a href="#gallery">Gallery</a></li>
            </ul>
          </nav>
          <div className={styles.reachUsContainer}>
          <h4>REACH US</h4>
              <div>
                <b>Address:</b> Baroda High School, KG & Prim. Section WadiWadi,<br/> Alkapuri, Vadodara-390005
             </div>
              <div>
                <b>Phone:</b> 9016962437
              </div>
              <div>
                <b>Email: </b> office.bhsap@bhs.edu.in
              </div>
          </div>
        
        </footer>
        <div className={styles.copyrightText}>
          <p>Copyrights ©2023: Vadodara Traffice police All rights reserved</p>
        </div>
    </div>
  );
}

export default App;
