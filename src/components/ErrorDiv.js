import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

import {hideErrorDiv} from '../store/actions/error';

const MapStateToProps = (state) => ({ error: state.errorDiv });
const MapDispatchToProps = (dispatch) => ({ hideError: () => dispatch(hideErrorDiv()) })


export const ErrorDiv = ({ error, hideError }) => (
    <CSSTransition
        mountOnEnter
        unmountOnExit
        timeout={300} 
        in={error ? true : false} 
        classNames="slide" >
        <div key={error} className="ErrorDiv">
            <p className="ErrorDiv-text">
                {error}
            </p>
            <span onClick={hideError} className="ErrorDiv-close">&#10005;</span>
        </div>
    </CSSTransition>
)

ErrorDiv.propTypes = {
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    hideError: PropTypes.func.isRequired
}


export const ErrorDivConnected = connect(MapStateToProps, MapDispatchToProps)(ErrorDiv)