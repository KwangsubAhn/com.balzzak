import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Drawer, Image, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './Header.less';

const menuItems = [
    {
        key: '/',
        label: '홈',
    },
    {
        key: '/menu',
        label: '메뉴',
    },
    {
        key: '/franchise',
        label: '가맹문의',
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
            <a href='https://www.instagram.com/balzzak_sulzip' target='_blank'>
                <Image
                    preview={false}
                    width={136}
                    height={64}
                    src={process.env.PUBLIC_URL + '/img/balzzak-logo.png'}
                />
            </a>
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
                <MenuOutlined onClick={() => { setVisible(true) }} />
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
