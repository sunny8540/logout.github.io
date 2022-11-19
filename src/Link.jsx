import React from 'react'
import {NavLink} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

import './index.css'
function Link() {
    const { user,loginWithRedirect,logout,isAuthenticated  } = useAuth0();
  return (
    <div>
        <div className='linkMain'>
                <div className='link'>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact">contact</NavLink>

                    </li>
                    <li>
                    <NavLink to="/about">about</NavLink>

                    </li>


                    {
                        isAuthenticated?
                   ( <li>
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                         Log Out
                     </button>
                    </li>):
                    (<li>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                    
                    
               
                    
                    </li>
                      
  
                     
                    )
                    }
                   



                </ul>
                </div>
        </div>
                <div className='linkRight'  >
                    <div  className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
    </div>
  )
}

export default Link;
