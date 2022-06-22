import { Avatar, Layout, Typography } from 'antd';
import { PhoneFilled } from '@ant-design/icons';

import Header from '../components/Header';
import Footer from '../components/Footer';
import './MainLayout.less';
import { companyInfo } from '../globalVariable';

const { Content } = Layout;
const { Link } = Typography;

function MainLayout(props: any) {
    const { children } = props;

    return (
        <Layout className='mainlayout-container'>
            <Header />
            <Content className='mainlayout-content'>
                { children }
            </Content>
            <Footer />
            <div className='mainlayout-avatar'>
                <Avatar size={52}>창업<br />문의</Avatar>
                <Link href={`tel: ${companyInfo.phone2}`}>
                    <Avatar size={52} icon={<PhoneFilled />} />    
                </Link>
            </div>
        </Layout>
    );
}

export default MainLayout;