import { Layout } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
const { Content } = Layout;

function MainLayout(props: any) {
    const { children } = props;

    return (
        <Layout>
            <Header />
            <Content style={{ minHeight: 'calc(100vh - 300px)', paddingLeft: 50, paddingRight: 50 }}>
                { children }
            </Content>
            <Footer />
        </Layout>
    );
}

export default MainLayout;