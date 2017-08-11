import React, {PropTypes}  from 'react';
import { GoogleLogin } from 'react-google-login-component';
import {bindActionCreators} from 'redux';
import * as googleActions from '../../actions/googleActions';
import { connect } from 'react-redux';

class GoogleComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            profile: Object.assign({}, props.profile)
        };
        this.responseGoogle = this.responseGoogle.bind(this);
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.profile) {
            this.props.result(nextProps.profile);
        }
    }

    responseGoogle (googleUser) {
        let id_token = googleUser.getAuthResponse();
        this.props.actions.getProfile(id_token.access_token)
        .then(() => {

        })
        .catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <GoogleLogin socialId="264366517101-pqvhkak7bn59il0b5bdp4sfi7nnc9th6.apps.googleusercontent.com"
                    class="google-login"
                    scope="https://www.googleapis.com/auth/plus.me"
                    responseHandler={this.responseGoogle}
                    buttonText="Login With Google"/>
            </div>
        );
    }
}

GoogleComponent.propTypes = {
    actions: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    result: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    let googleProfile = {id: '', name: '', given_name: ''};
    googleProfile = state.profile;
    return {
        profile: googleProfile
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(googleActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (GoogleComponent);