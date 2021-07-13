import React, { Component } from 'react'
// import Varfication from './components/Varfication';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import BestBooks from './components/BestBlog';
import Login from './components/Login';
import Logout from './components/Logout';
import AllBlogs from './components/AllBlogs';


export class App extends Component {
  render() {
    return (
      <>
        {/* <Varfication/> */}
        { this.props.auth0.isAuthenticated ?
                <>
                <BestBooks/>
                <Logout/>
                </> :
                <Login/>
                    }
        <AllBlogs/>

      </>
    )
  }
}

export default withAuth0(App);
