import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import {Spinner} from '../components/Spinner';

const ListOverview = ({fetched, lists}) => {
    let toReturn = <Spinner />
    if (fetched) {
        !lists.length 
        ? toReturn = (<p className="UserDashboard-info">You have no lists.<br/>You're welcome to add some!<br/>See that input to the right? <br/> Use it.</p>)
        : toReturn = (
            <TransitionGroup component="ul" className="UserDashboard-list">
                {lists.map(list => (
                    <CSSTransition
                        unmountOnExit
                        mountOnEnter
                        key={list.id}
                        classNames="fade"
                        timeout={300}>
                    <div className="UserDashboard-link-wrapper">
                        <Link className="UserDashboard-link" to={`/overview/${list.id}`}>
                            {list.title}
                        </Link>
                    </div>
                </CSSTransition>
                ))}
            </TransitionGroup>
        )
    }
    return toReturn
}

ListOverview.propTypes = {
    fetched: PropTypes.bool.isRequired,
    lists: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
    lists: state.userData.lists,
    fetched: state.userData.fetched
});

export const ListOverviewConnected = connect(mapStateToProps)(ListOverview)