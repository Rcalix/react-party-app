import React, {Component, PropTypes} from 'react';
import { Layout, Icon, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';
import GoogleComponent from '../common/google';

class LoginPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            GoogleInfo: {}
        };
        this.getGoogleData = this.getGoogleData.bind(this);
    }
     getGoogleData(data) {
         console.log(this.state, 'state');
         this.setState({GoogleInfo: data});
        
    }    
    render () {
        return (
            <div>
                <Layout  className="layout">
                    <Header style={{ background: '#3ba0e9'}}>
                        {this.state.GoogleInfo.picture &&
                            <Avatar size="large" src={this.state.GoogleInfo.picture}/>
                        }
                    </Header>
                    <Content>
                        <GoogleComponent result={this.getGoogleData}/>
                    </Content>
                </Layout>  
            </div>
        );
    }
}

LoginPage.propTypes = {
    GoogleInfo: PropTypes.object.isRequired
};

export default LoginPage;