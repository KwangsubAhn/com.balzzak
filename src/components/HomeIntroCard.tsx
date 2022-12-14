import { useNavigate } from 'react-router-dom';
import { Image, Typography } from 'antd';

import './HomeIntroCard.less';
const { Text } = Typography;

interface IProps {
    text: string;
    clickFunc: Function;
    imgUrl: string;
}

function HomeIntroCard(props: IProps) {
    const { text, imgUrl, clickFunc } = props;
    
    return (
        <div className='home-intro-card' onClick={() => { clickFunc(); }}>
            <Image 
                src={imgUrl}
                preview={false}
            />
            <div className='home-intro-mask' />
            <Text className='home-intro-text'>{ text }</Text>
        </div>
    );
}

export default HomeIntroCard;
