import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';



const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button style={{float:'right'}} variant="outline-dark" onClick={() => loginWithRedirect()}>Log In</Button>
  // <button  onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login;