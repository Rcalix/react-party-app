import React, {PropTypes} from 'react';
// import Header from './common/Header';

import LoginPage from './home/loginPage';
import {connect} from 'react-redux';

class App extends React.Component {
    render() {
        return (
            <div>
                <LoginPage/>
            </div>
        );
    }
}

App.propTypes = {
};

function mapStateToProps(state , ownProps) {
    return {
    };
}
export default connect(mapStateToProps)(App);