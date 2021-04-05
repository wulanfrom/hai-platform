import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'

// redux
import * as actions from '../../redux/actions/index'
import { connect } from 'react-redux'

function Logout(props) {
    useEffect(() => {
        props.onLogout();
    }, []);

    return (
        <div>
            <Redirect to="/login" />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);