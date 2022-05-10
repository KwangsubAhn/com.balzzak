import { useLocation, useNavigate } from 'react-router-dom';
import { Image, Layout, Menu } from 'antd';

import './Header.less';

export const HEADER_HEIGHT = 90;

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
    
    return (
        <Layout.Header className='header-container' style={{ height: HEADER_HEIGHT }}>
            <Image
                preview={false}
                width={136}
                height={64}
                src={process.env.PUBLIC_URL + '/img/balzzak-logo.png'}
            />
            <Menu 
                className='header-menu' 
                defaultSelectedKeys={[location.pathname]} 
                mode="horizontal" 
                items={menuItems} 
                onClick={(e) => {
                    navigate(e.key);
                }}
            />
        </Layout.Header>
    );
}

export default Header;
