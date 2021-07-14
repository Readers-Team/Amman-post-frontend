import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className="w3-button w3-black w3-section w3-right" type="submit">Log Out</button>
    // <header class="w3-container w3-large w3-padding-24">
    // <button onClick={() => logout({ returnTo: window.location.origin })} class="w3-right w3-button w3-white">Log Out</button>
    // </header>
  );
};

export default Logout;