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
                <Row style={{ marginTop: 50, marginBottom: 50 }}>
                    <Col span={16} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ marginLeft: 10, marginRight: 10, position: 'relative' }}>
                            <Image 
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise1.jpeg" 
                                preview={false}
                            />
                            <Text style={{ position: 'absolute', fontSize: 28, left: 28, bottom: 28, color: 'white' }} onClick={() => { alert('tbc'); }}>
                                점주인터뷰
                            </Text>
                        </div>
                        <div style={{ marginLeft: 10, marginRight: 10, position: 'relative' }}>
                            <Image 
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise2.jpeg" 
                                preview={false}
                            />
                            <Text style={{ position: 'absolute', fontSize: 28, left: 28, bottom: 28, color: 'white' }} onClick={() => { alert('tbc'); }}>
                                회사소개
                            </Text>
                        </div>
                        <div style={{ marginLeft: 10, marginRight: 10, position: 'relative' }}>
                            <Image 
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/franchise3.jpeg" 
                                preview={false}
                            />
                            <Text style={{ position: 'absolute', fontSize: 28, left: 28, bottom: 28, color: 'white' }} onClick={() => { alert('tbc'); }}>
                                가맹점주특전
                            </Text>
                        </div>
                    </Col>
                    <Col span={8} style={{ display: 'flex', alignItems: 'center' }}>
                        <div>
                            <Paragraph>Balzzak System</Paragraph>
                            <Title style={{ marginTop: 0 }}>성공창업포인트</Title>
                            <Paragraph>프랜차이즈 창업의 성공 여부는 바로 시스템!<br />발짝만의 특별한 성공창업시스템을 만나보세요.</Paragraph>
                            <Button type="primary" size={'large'} onClick={() => { navigate('/franchise'); }}>
                                자세히 보기
                            </Button>
                        </div>
                    </Col>
                </Row>
            </BodyContainer>
        </>
    );
}

export default Home;