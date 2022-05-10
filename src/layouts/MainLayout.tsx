import React from 'react';
import { Divider, Layout, Typography } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Test from '../components/Test';
const { Content } = Layout;

function MainLayout(props: any) {
    const { children } = props;

    return (
        <Layout>
            <Header />
            <Content style={{ minHeight: 'calc(100vh - 300px)'}}>
                {/* <Test /> */}
                { children }
            </Content>
            <Footer />
        </Layout>
    );
}

export default MainLayout;