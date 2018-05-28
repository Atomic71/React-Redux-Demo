import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

import {hideErrorDiv} from '../store/actions/error/index';

const MapStateToProps = (state) => ({ error: state.errors.div });
const MapDispatchToProps = (dispatch) => ({ hideError: () => dispatch(hideErrorDiv()) })


export const ErrorDiv = ({ error, hideError }) => (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        timeout={300} 
        in={error ? true : false} 
        classNames="slide" >
        <div key={error} className="error-div">
            <p className="error-text">
                {error}
            </p>
            <span onClick={hideError} className="error-close">&#10005;</span>
        </div>
    </CSSTransition>
)

ErrorDiv.propTypes = {
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    hideError: PropTypes.func.isRequired
}


export const ErrorDivConnected = connect(MapStateToProps, MapDispatchToProps)(ErrorDiv)