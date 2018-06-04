import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { LandingConnected as Landing } from './Landing';
import { UserAreaConnected as UserArea } from './UserArea';
import PrivateRoute from '../components/PrivateRoute';

const LoggedOutRoutes = (
    <Switch>
        <Route path="/" exact component={Landing} />
        <Redirect to="/home" />
    </Switch>
)

const LoggedInRoutes = (
    <Switch>
        <Route path="/overview/:id" component={UserArea} />
        <Route path="/overview" component={UserArea} />
        <Redirect to="/overview" />
    </Switch>
)
class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Landing} />
                <PrivateRoute path="/overview/:id" component={UserArea} />
                <PrivateRoute path="/overview" component={UserArea} />
            </Switch>
        )
    }
}
// const App = ({ token }) => (
//     <React.Fragment>
//         {token ? LoggedInRoutes : LoggedOutRoutes}
//     </React.Fragment>
// )

App.propTypes = {
    token: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]).isRequired,
}

const mapStateToProps = (state) => ({ token: state.userData.token })

export default withRouter(connect(mapStateToProps)(App));