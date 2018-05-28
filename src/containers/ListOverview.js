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
        ? toReturn = (<p>"You have no lists"</p>)
        : toReturn = (
            <TransitionGroup component="ul" className="animatedList">
                {lists.map(list => (
                    <CSSTransition
                        unmountOnExit
                        mountOnEnter
                        key={list.id}
                        classNames="fade"
                        timeout={300}>
                    <div className="list-link-wrapper">
                        <Link className="list-link" to={`/overview/${list.id}`}>
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