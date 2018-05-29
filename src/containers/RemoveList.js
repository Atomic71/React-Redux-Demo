import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeList } from '../store/actions/list';
import { Button } from "../components/Button";
import { Icon } from '../components/Icon';

const MapStateToProps = ( state ) => ({
    token: state.userData.token,
}) 

const MapDispatchToProps = ( dispatch ) => ({
    removeListHandler: (token, list) => dispatch(removeList(token, list)),  
})

const RemoveList = ({list, token, removeListHandler}) => (
    <Icon onClickHandler={() => removeListHandler(token, list)} icon="bin" itemTitle="Delete list" />
)
RemoveList.propTypes = {
    list: PropTypes.object.isRequired,
    token: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]).isRequired,
    removeListHandler: PropTypes.func.isRequired
}

export const RemoveListConnected = connect(MapStateToProps, MapDispatchToProps)(RemoveList)

    {/* <Button classes="danger" text="X" 
        clickHandler={() => removeListHandler(token, list)} 
    />   */}