import React from 'react';
import { Image, Layout, Menu, Typography } from 'antd';
import './Header.less';

const { Title } = Typography;

function Header() {
    return (
        <Layout.Header className='header-container'>
            <Image
                preview={false}
                width={136}
                height={64}
                src={process.env.PUBLIC_URL + '/img/balzzak-logo.png'}
            />
            <Menu mode="horizontal">
                <Menu.Item><Title level={5}>홈</Title></Menu.Item>
                <Menu.Item><Title level={5}>메뉴</Title></Menu.Item>
                <Menu.Item><Title level={5}>가맹문의</Title></Menu.Item>
                <Menu.Item><Title level={5}>매장안내</Title></Menu.Item>
            </Menu>
            
        </Layout.Header>
    );
}

export default Header;
