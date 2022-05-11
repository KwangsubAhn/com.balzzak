import { Image } from 'antd';

import BodyContainer from "../components/BodyContainer";
import BodyTitle from "../components/BodyTitle";
import './Menu.less';

function Menu() {
    return (
        <>
        <BodyTitle />
        <BodyContainer >
            <div className='menu-container'>
                <div className='pc-menu'>
                    <Image  
                        preview={false}
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/menu.png"
                    />
                </div>
                <div className='mobile-menu'>
                    <Image  
                        preview={false}
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/menu+1.jpg"
                    />
                    <Image  
                        preview={false}
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/menu+2.jpg"
                    />
                    <Image  
                        preview={false}
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/menu+3.jpg"
                    />
                    <Image  
                        preview={false}
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/menu+4.jpg"
                    />
                </div>
            </div>
        </BodyContainer>
        </>
    );
}

export default Menu;