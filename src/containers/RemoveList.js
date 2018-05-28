import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeList } from '../store/actions/list';
import { Button } from "../components/Button";


const MapStateToProps = ( state ) => ({
    token: state.userData.token,
}) 

const MapDispatchToProps = ( dispatch ) => ({
    removeListHandler: (token, list) => dispatch(removeList(token, list)),  
})

const RemoveList = ({list, token, removeListHandler}) => (
    <Button classes="danger" text="Delete list" 
        clickHandler={() => removeListHandler(token, list)} 
    />  
)
RemoveList.propTypes = {
    list: PropTypes.object.isRequired,
    token: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    removeListHandler: PropTypes.func.isRequired
}

export const RemoveListConnected = connect(MapStateToProps, MapDispatchToProps)(RemoveList)
