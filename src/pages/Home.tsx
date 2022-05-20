import { Button, Carousel, Col, Image, Modal, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import BodyContainer from "../components/BodyContainer";

import './Home.less';
const { Title, Paragraph, Text } = Typography;

function Home() {
    const navigate = useNavigate();
    
    return (
        <>
            <div className='home-carousel'>
                <Carousel>
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home1_min.jpg" 
                        preview={false}
                        width='100%'
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home2_min.jpg" 
                        preview={false}
                        width='100%'
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home3_min.jpg" 
                        preview={false}
                        width='100%'
                    />
                </Carousel>
            </div>
            <BodyContainer>
                <div className='home-container'>
                    <Row className='home-intro-restaurant'>
                        <Col xs={24} sm={16} className='home-intro-restaurant-col1' >
                            <div onClick={() => { navigate('/balzzak-story'); }}>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise1_min.jpg" 
                                    preview={false}
                                />
                                <Text>발짝스토리</Text>
                            </div>
                            <div onClick={() => { navigate('/featured-menu'); }}>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise2_min.jpg" 
                                    preview={false}
                                />
                                <Text>대표메뉴</Text>
                            </div>
                            <div onClick={() => { Modal.info({ content: '[선착순 전수창업 10호점까지 전수비 반값]' }); }}>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise3_min.jpg" 
                                    preview={false}
                                />
                                <Text>창업이벤트</Text>
                            </div>
                        </Col>
                        <Col xs={24} sm={8} style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='home-balzzak-system'>
                                <Title style={{ marginTop: 0 }}>발짝 전수창업 안내</Title>
                                <Paragraph>
                                    누구나 쉽게 따라할수있는 초간단 레시피와<br />
                                    1인매장부터 오토매장까지 일하기좋은 시스템 구축<br />
                                    운영노하우및 경험까지 모두 전수하여<br />
                                    성장지속 가능한 알짜매장의 창업자의 취향에따라 맟춤가게 창업<br />
                                </Paragraph>
                                <Button type="primary" size={'large'} onClick={() => { navigate('/franchise'); }}>
                                    자세히 보기
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>

                
            </BodyContainer>
        </>
    );
}

export default Home;