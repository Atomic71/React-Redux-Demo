import React, {Component} from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchLists } from '../store/actions/list/index';
import { tryLogout } from '../store/actions/auth/index';
import { AddListForm } from './forms/AddList'
import { ListOverviewConnected as ListOverview } from './ListOverview';
import { ErrorDivConnected as ErrorDiv } from '../components/ErrorDiv';
import { TodoListConnected as TodoList } from './TodoList';

const AddList = () => (
    <div className="AddList-wrapper">
        <h2 className="AddList-Heading">Please enter a list name to start getting stuff done!"</h2>
        <AddListForm />
    </div>
)
const UserDashboard = () => (
    <div className="UserDashboard">
        <h2 className="UserDashboard-heading">Pink Panther's lists</h2>
        <ListOverview />
    </div>
)

const UserWorkspace = () => (
    <div className="Workspace">
        <ErrorDiv />
        <Switch>
            <Route path="/overview/:id" component={TodoList}/>
            <Route path="/overview" render={AddList}/>
        </Switch>
    </div>
)


class UserArea extends Component {
    componentDidMount() {
        const { token, fetchUserLists } = this.props; 
        token && fetchUserLists(token) 
    }
    render() {
        const {logout} = this.props;
        return (
            <section className="overview">
                <header>
                    <h1>PandaApp</h1>
                    <nav>
                        <Link to="/overview">List overview</Link>
                        <Link to="/home" onClick={logout}>Logout</Link>
                    </nav>
                </header>
                <main>
                    <UserDashboard />
                    <UserWorkspace />
                </main>
            </section>
        )
    }
}


const mapStateToProps = (state) => ({ token: state.userData.token })

const mapDispatchToProps = (dispatch) => ({ 
    fetchUserLists: (token) => dispatch(fetchLists(token)),
    logout: () => dispatch(tryLogout()) 
})

export const UserAreaConnected = connect(mapStateToProps, mapDispatchToProps)(UserArea);