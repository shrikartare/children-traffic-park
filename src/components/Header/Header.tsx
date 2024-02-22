import React from 'react';
import styles from  './Header.module.css';
import logo from "../../images/logo.png"

function Header() {

  const onHamburgerClick = ()=>{

  }
  return (
      <header>
        <div>
        <img className={styles.logo}  src={logo} alt="vadodara traffic park"/>
        <h2> TRAFFIC PARK</h2>

        </div>
         
          <ul className={styles.navigation}>
            <li>
              <a href="#home">Home</a>
              </li>
              <li>
              <a href="#contactus">Contact Us</a>
           </li>
             <li>
              <a href="#aboutus">About Us</a>
             </li>
             <li className={styles.mobileMenu}>
                <a href="javascript:void(0);" className="icon" >
                  <i className="fa fa-bars"></i>
                </a>
            </li>
          </ul>
      
        </header>
  );
}

export default Header;
