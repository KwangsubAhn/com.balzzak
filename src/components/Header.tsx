import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, Image, Layout, Menu, Typography } from 'antd';
import { InstagramOutlined, MenuOutlined, PhoneOutlined } from '@ant-design/icons';

import './Header.less';
import { companyInfo } from '../globalVariable';

const { Link } = Typography;

const menuItems = [
    {
        key: '/',
        label: '홈',
    },
    {
        key: '/balzzak-story',
        label: '발짝스토리',
    },
    {
        key: '/featured-menu',
        label: '대표메뉴',
    },
    {
        key: '/menu',
        label: '메뉴판',
    },
    {
        key: '/franchise',
        label: '전수창업문의',
    },
    {
        key: '/about',
        label: '매장안내',
    },
];

function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const [visible, setVisible] = useState(false);
    
    return (
        <Layout.Header className='header-container'>
            <Link onClick={() => { navigate('/'); }}>
                <Image
                    preview={false}
                    width={136}
                    height={64}
                    src={process.env.PUBLIC_URL + '/img/balzzak-logo.png'}
                />
            </Link>
            <div className='header-pc-view'>
                <Menu
                    defaultSelectedKeys={[location.pathname]} 
                    mode="horizontal" 
                    items={menuItems} 
                    onClick={(e) => {
                        navigate(e.key);
                    }}
                />
            </div>
            <div className='header-mobile-view'>
                <Link style={{ display: 'flex', marginRight: 10, fontSize: 22, color: 'inherit' }} href={companyInfo.insta} target="_blank">
                    <InstagramOutlined />
                </Link>
                <Link style={{ display: 'flex', marginRight: 10, fontSize: 22, color: 'inherit' }} href={`tel: ${companyInfo.phone}`} target="_blank">
                    <PhoneOutlined />
                </Link>
                <MenuOutlined style={{ marginLeft: 20, fontSize: 20 }} onClick={() => { setVisible(true) }} />
                <Drawer width='75vw' className='header-mobile-drawer' placement="right" onClose={() => { setVisible(false)} } visible={visible}>
                    {
                        menuItems.map((item, index) => {
                            return <p key={index} onClick={() => { setVisible(false); navigate(item.key); }}style={{ fontSize: 18 }}>{item.label}</p>
                        })
                    }
                </Drawer>
            </div>
        </Layout.Header>
    );
}

export default Header;
