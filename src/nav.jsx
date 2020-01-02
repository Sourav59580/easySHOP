import React, { Component } from 'react'
import "./css/nav.css"
import { Link } from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return(
           <React.Fragment>
              <div className="container-fluid py-3 d-none d-lg-block" id="top_nav_container">
                  <div className="row d-flex justify-content-between">
                  <div className="col-md-5 d-flex justify-content-between">
                      <div className=" d-flex justify-content-center align-items-center">
                          <div className="mx-2"><i className="fa fa-mobile" style={{fontSize:"28px",color:"grey"}}></i></div>
                          <div><h6 style={{color:"grey"}}>+91 9823 132 111</h6></div>
                      </div>
                      <div className=" d-flex justify-content-center align-items-center">
                          <div className="mx-2"><i className="fa fa-envelope" style={{fontSize:"18px",color:"grey"}}></i></div>
                          <div><h6 style={{color:"grey"}}>souravsantra59680@gmail.com</h6></div>
                           
                      </div>
                  </div>
                  <div className="col-md-7">
                      <div className="float-right d-flex">
                    <div className="mr-5">English</div>
                     <div className="mr-5">$US doller</div> 
                     <div className="mr-5"><i className="fa fa-user"> </i> Register</div>
                     <div className="mr-3">Sign in</div>
                     </div>
                  </div>
                </div>
              </div>
              {/* 2nd navbar */}
            <div className="container-fluid py-4" id="nd_nav_container">
               <div className="row">
                    <div className=" col-lg-2 col-sm-3 col-3 order-lg-1 order-1">
                        <div>
                            <div><h4 className="text-primary">easySHOP</h4></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-2 order-3">
                       <div className="input-group">
                         <input type="text" className="form-control" placeholder="Search for products..."/>
                         <div className="input-group-append bg-primary">
                           <span className="input-group-text bg-primary text-light border-0"><i className="fa fa-search"></i></span>
                         </div>
                       </div>    
                    </div>
                    <div className="col-lg-4 col-9  order-lg-3 order-2 d-flex justify-content-center">
                      <div className="mr-4 d-flex">
                          <div className="ml-4">
                          <i className="fa fa-heart-o" style={{fontSize:"26px"}}></i>
                          </div>
                          <div>
                          <sup><span>Wish</span><sup><span class="badge badge-primary" style={{fontSize:"10px"}}>5</span></sup> </sup> 
                          </div>
                      </div>
                      <div className="d-flex">
                          <div>
                          <i className="fa fa-shopping-bag" style={{fontSize:"26px"}}></i>
                          </div>
                          <div>
                          <sup><span>Cart</span><sup><span class="badge badge-primary" style={{fontSize:"10px"}}>5</span></sup> </sup>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="last_navbar_container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <Link to="/">
                        <li className="nav-item active mx-3">
                           <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        </Link>
                        <Link to="/About">
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Deals</a>
                        </li>
                        </Link>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Sell</a>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop By Category
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                               <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                             </div>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Blog</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
           </React.Fragment>
    
        )
    }
}
