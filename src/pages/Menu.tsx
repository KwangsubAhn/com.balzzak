import { Image } from 'antd';

import BodyContainer from "../components/BodyContainer";
import BodyTitle from "../components/BodyTitle";
import MainLayout from '../layouts/MainLayout';
import './Menu.less';

function Menu() {
    return (
        <MainLayout>
            <BodyTitle text='메뉴판' />
            <BodyContainer >
                <div className='menu-container'>
                    <div className='pc-menu'>
                        <Image  
                            preview={false}
                            src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/menu-pc-0615.jpg"
                        />
                    </div>
                    <div className='mobile-menu'>
                        <Image  
                            preview={false}
                            src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/menu-mobile1-0615.jpg"
                        />
                        <Image  
                            preview={false}
                            src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/menu-mobile2-0615.jpg"
                        />
                        <Image  
                            preview={false}
                            src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/menu-mobile3-0615.jpg"
                        />
                        <Image  
                            preview={false}
                            src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/menu-mobile4-0615.jpg"
                        />
                    </div>
                </div>
            </BodyContainer>
        </MainLayout>
    );
}

export default Menu;