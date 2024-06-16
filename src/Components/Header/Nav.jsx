import React from 'react';
// import "./Nav.css"
import img from "../Assets/Union-logo.png"
const NavbarComponent = () => {
    return ( <>
    
    <div className='container d-flex justify-content-between m-4 border'>

<div className="nav-box"><a href="http://" target="_blank" rel="noopener noreferrer">ATG.<img src={img} alt='Img-Logo'></img>WRLD</a></div>
<div className="nav-box"><input type="search" name="" id=""placeholder='Search for your favorite groups in ATG' /></div>
<div className="nav-box"><a href="http://" target="_blank" rel="noopener noreferrer">Create account. It’s free!</a></div>



    </div>
   
    
    
    
    
    </> );
}
 
export default NavbarComponent;