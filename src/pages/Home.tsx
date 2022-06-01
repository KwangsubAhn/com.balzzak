import { Button, Col, Image, Modal, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

import BodyContainer from "../components/BodyContainer";
import MainLayout from "../layouts/MainLayout";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.less';

const { Title, Paragraph, Text } = Typography;

function Home() {
    const navigate = useNavigate();
    
    return (
        <MainLayout>
            <div className='home-carousel'>
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home1_min.jpg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home2_min.jpg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/home3_min.jpg" 
                        preview={false}
                    />
                </Carousel>
            </div>
            <BodyContainer>
                <div className='home-container'>
                    <Row className='home-intro-restaurant'>
                        <Col xs={24} sm={16} className='home-intro-restaurant-col1' >
                            <div onClick={() => { navigate('/balzzak-story'); }}>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/balzzak-outdoor.jpg" 
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
                        <Col xs={24} sm={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='home-balzzak-system'>
                                <Title style={{ marginTop: 0 }}>발짝 전수창업 안내</Title>
                                <Paragraph>
                                    누구나 쉽게 따라할수있는 초간단 레시피와 1인 매장부터 오토매장까지 일하기 좋은 시스템구축. 운영노하우 및 경험까지 모두 전수하여여 소자본 알짜매장이 가능하고 창업자의 취향에 따라 맞춤가게 설정과 본점과의 지속적인 소통과 정보로 오래가는 전수창업 
                                </Paragraph>
                                <Button type="primary" size={'large'} onClick={() => { navigate('/franchise'); }}>
                                    자세히 보기
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>

                
            </BodyContainer>
        </MainLayout>
    );
}

export default Home;