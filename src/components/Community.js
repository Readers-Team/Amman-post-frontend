import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import Myblogs from './Myblogs';
import Login from './Login';
import Logout from './Logout';
import AllBlogs from './AllBlogs';


export class Community extends Component {
  render() {
    return (
      <>
        { this.props.auth0.isAuthenticated ?
                <>
                 <Logout/>
                <Myblogs/>
                    
                </> :
                
                <Login/>
                    }
        <AllBlogs/>

      </>
    )
  }
}

export default withAuth0(Community);