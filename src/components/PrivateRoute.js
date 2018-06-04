import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const MapStateToProps = (state) => ({
    token: state.userData.token
})

const PrivateRoute = ({ component: Component, token, ...rest }) => (
    <Route {...rest} render={(props) => (
        token
            ? <Component {...props} />
            : <Redirect to="/" />
    )}
    />
)

export default withRouter(connect(MapStateToProps)(PrivateRoute))