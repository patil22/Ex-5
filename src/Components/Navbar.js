import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [alert, setalert] = useState({
        msg: "",
        type: ""
    })
    const makecapital = (word)=>{
       
        let wo = word.toLowerCase()
      return( wo.charAt(0).toUpperCase() + wo.slice(1))

    }

    const sw = () => {

       
        let col = document.body.style.backgroundColor;



        if (col === "white") {

            console.log(col)
            document.body.style.backgroundColor = 'grey'
            setalert({
                msg: "qcolor mode activated successfully",
                type: "success"
            })

        }
        else {


            console.log(col)
            document.body.style.backgroundColor = 'white';
            setalert({
                msg: "gcolor  mode remooved",
                type: "warning"
            })
        }

    }

    return (

        <div>

            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className="container-fluid">
                    <NavLink className="navlinks" activeclassName exact="true" to="/" >Home</NavLink>

                    {/* <a className="navbar-brand" href="#">Home</a>  */}

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                {/* <a className="nav-link active" aria-current="page" href="#">Gaurav</a> */}
                                <NavLink className="navlinks mx-2" activeclassName to="/Gaurav">Gaurav</NavLink>
                                <NavLink activeclassName to="/Api" className="api">Api</NavLink>


                            </li>
                            <li className="nav-item">


                                <NavLink className="navlinkss " activeclassName to="/Contactus">Contact</NavLink>
                                <NavLink activeclassName to="/text" className="text">Text</NavLink>
                                <NavLink activeclassName to="/Accordian" className="mx-3">Accordian</NavLink>
                                <NavLink activeclassName to = "/Crud" className="crud">Crus</NavLink>
                                <NavLink activeclassName to="/Formvalidation" className="Formvalidation">Formvalidation</NavLink>


                                {/* <a className="nav-link" href="#">Contact</a> */}
                            </li>
                            {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                            {/* <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                        </ul>
                        {/* switch */}
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" onClick={sw}  role="switch" id="flexSwitchCheckDefault" />

                        </div>

                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>


            </nav>
            <br />
            <div class={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
        <strong>{makecapital(alert.msg)}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
            
         
        


        </div>

    )

   
}

export default Navbar;




