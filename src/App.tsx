import React from 'react';
import { Divider, Layout, Typography } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './components/Test';
const { Content } = Layout;
const { Title } = Typography;

function App() {
    return (
        <Layout>
            <Header />
            <Divider style={{ marginBottom: 60 }} />
            <Content>
                <Test />
                <Title>h1. Ant Design</Title>
                <Title level={2}>h2. Ant Design</Title>
                <Title level={3}>h3. Ant Design</Title>
                <Title level={4}>h4. Ant Design</Title>
                <Title level={5}>h5. Ant Design</Title>
            </Content>
            <Footer />
        </Layout>
    );
}

export default App;
