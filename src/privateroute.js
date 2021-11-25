import React from 'react'
import PropTypes from 'prop-types'

import {
  Route,
  Redirect
} from 'react-router-dom'
import { YES } from './constants';

const isAuthenticated = () => {
    return localStorage.getItem("LIFF_STORE:1656423908-z2DErD50:accessToken") != null;}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      isAuthenticated() === true ? (
        <Component { ...props } />
      ) : (
        <Redirect
          to= '/'
        />
      )
    }
  />
)

PrivateRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object
}

export default PrivateRoute