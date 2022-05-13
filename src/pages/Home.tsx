import { Button, Carousel, Col, Image, Row, Typography } from "antd";
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
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/slide-image.jpeg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/slide-2.jpeg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/slide-3.jpeg" 
                        preview={false}
                    />
                </Carousel>
            </div>
            <BodyContainer>
                <div className='home-container'>
                    <Row className='home-intro-restaurant'>
                        <Col xs={24} sm={16} className='home-intro-restaurant-col1' >
                            <div>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise1.jpeg" 
                                    preview={false}
                                />
                                <Text>
                                    점주인터뷰
                                </Text>
                            </div>
                            <div>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise2.jpeg" 
                                    preview={false}
                                />
                                <Text>
                                    회사소개
                                </Text>
                            </div>
                            <div>
                                <Image 
                                    src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise3.jpeg" 
                                    preview={false}
                                />
                                <Text>
                                    가맹점특전
                                </Text>
                            </div>
                        </Col>
                        <Col xs={24} sm={8} style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='home-balzzak-system'>
                                <Paragraph>Balzzak System</Paragraph>
                                <Title style={{ marginTop: 0 }}>성공창업포인트</Title>
                                <Paragraph>프랜차이즈 창업의 성공 여부는 바로 시스템!<br />발짝만의 특별한 성공창업시스템을 만나보세요.</Paragraph>
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