import React from 'react';
import styles from "./App.module.css"
import Header from "./components/Header"

function App() {

 
  return (
    <div className="App">
     <Header/>
     <div className={styles.bannerImage} >
        <img alt="img1"  src={require('./images/img02.jpeg')}/>
      </div>
     <div className={styles.aboutUs}>
          <h3>About Us</h3>
          <div className={styles.imageContainer}>
         <img  src={require('./images/img01.jpeg')} alt={"About Us"}/>
          <p>A traffic park built near the office of DCP has been constructed by Vadodara Police Commissioner Anupamsigh Gehlot. 
            It is an traffic park near the office of Bhudizampa Traffic DCP to make children understand traffic from an early age. 
           Schools will come in traffic garden where children will learn through all signs related to traffic.
           Small forests of 22 plants have been developed next to the traffice garden.10 police personnel have trained to explain traffic rules to children.
           The police will also play quizzes on traffic to the children.
          </p>
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
                <b>Address:</b> Children Traffic Park, Near Karelibaug Police Station <br/> Karelibaug, Vadodara-390005
             </div>
              <div>
                <b>Phone:</b> 8460210158
              </div>
              <div>
                <b>Email: </b> shrikar.tare@gmail.com
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
