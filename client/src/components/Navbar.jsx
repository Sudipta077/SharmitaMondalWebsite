import React from "react";
import logo from '../images/logo192.gif';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    const Navigate=(e)=>{
        e.target.classList.add('navigate');
};
    
    return (
        <>
            <nav className="navbar navbar-expand-lg col-sm-12 navbar-light">
                <div className="container text-center">
                    <a className="navbar-brand fs-1" href="#">
                        <img src={logo} alt="" width="100" height="80" className="d-inline-block align-text-center" />
                        Sharmita Mondal
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link active"  onClick={Navigate} to='/'>Home</NavLink> 
                            </li>
                         
                            <li className="nav-item">
                               <NavLink className="nav-link active" onClick={Navigate} to='/works'>Works</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"  onClick={Navigate} to='/Pricing'>Pricing</NavLink> 
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active"  onClick={Navigate} to='/Contact'> Contact</NavLink> 
                            </li>
                           
                        
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
}
export default Navbar;