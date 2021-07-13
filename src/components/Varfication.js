'use strict'
import { withAuth0 } from '@auth0/auth0-react';
import React, { Component } from 'react'
import axios from 'axios';

export class Varfication extends Component {
    componentDidMount = () => {
        if(this.props.auth0.isAuthenticated) {
          this.props.auth0.getIdTokenClaims()
          .then(res => {
            const jwt = res.__raw;
            const config = {
              headers: {"Authorization" : `Bearer ${jwt}`},
              method: 'get',
              baseURL: process.env.REACT_APP_SERVER_URL,
              url: '/authorize'
            }
            axios(config)
              .then(axiosResults => console.log(axiosResults.data))
              .catch(err => console.error(err));
          })
          .catch(err => console.error(err));
        }
      }
    render() {
        return (
            <div>
                <h1>this is special content</h1>
            </div>
        )
    }
}

export default withAuth0(Varfication);