import React from 'react';
import styles from "./App.module.css"
import Header from "./components/Header"

function App() {

 
  return (
    <div className="App">
     <Header/>
     <div className={styles.bannerImage} >
        <img className="photo-blur" alt="Traffic park banner" src={require('./images/img02.jpeg')}/>
      </div>
     <div className={styles.aboutUs}>
          <h3>About Us</h3>
          <div className={styles.imageContainer}>
         <img className="photo-blur" src={require('./images/img01.jpeg')} alt="About the traffic park"/>
          <p>A traffic park built in collaboration with local traffic authorities helps children understand road safety from an early age.
           Schools visit the traffic garden where children learn through signs, signals, and interactive demonstrations.
           Green spaces have been developed alongside the park. Trained personnel explain traffic rules to children,
           and quizzes on traffic safety are conducted during visits.
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
                <b>Address:</b> Children Traffic Park, Near Central Police Station <br/> Sample City, ST 000000
             </div>
              <div>
                <b>Phone:</b> +91 98765 43210
              </div>
              <div>
                <b>Email: </b> contact@trafficpark-demo.example.com
              </div>
          </div>
        
        </footer>
        <div className={styles.copyrightText}>
          <p>Copyright © 2023 Children Traffic Park Initiative. All rights reserved.</p>
        </div>
    </div>
  );
}

export default App;
