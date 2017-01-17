import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Stream from './presenter';

function mapStateToProps(state) {
    const tracks = state.track;
    const { user } = state.auth;
    return {
        tracks,
        user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAuth: bindActionCreators(actions.auth, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);