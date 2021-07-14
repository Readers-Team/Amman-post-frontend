import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';



const Login = () => {
  const { loginWithRedirect } = useAuth0();
 
  return<> <button onClick={() => loginWithRedirect()} className="w3-button w3-black w3-section w3-topright" type="submit">Log In
   </button>
   <div id="text" style={{textAlign:'center'}} >Community Plogs 🤞 🎗️</div>
   </>
 
};

export default Login;