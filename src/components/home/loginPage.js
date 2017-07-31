import React from 'react';
import { Layout, Icon, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;
import 'antd/dist/antd.css';
import GoogleComponent from '../common/google';

class LoginPage extends React.Component {
    render () {
        return (
            <div>
                <Layout  className="layout">
                    <Header style={{ background: '#3ba0e9'}}>
                        <h1 style={{color: 'f7f7f7'}}> Header
                             <Avatar size="large" src="https://lh6.googleusercontent.com/-mgGZ5Ngq00E/AAAAAAAAAAI/AAAAAAAAAEA/5VEN4tGVbFE/photo.jpg"/>
                        </h1>
                    </Header>
                    <Content>
                        <GoogleComponent/>
                    </Content>
                </Layout>  
            </div>
        );
    }
}

export default LoginPage;