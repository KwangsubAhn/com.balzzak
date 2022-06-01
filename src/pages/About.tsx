import { Typography, Row, Col, Image } from 'antd';
import { ClockCircleOutlined, PhoneOutlined } from '@ant-design/icons';

import './About.less';
import BodyContainer from '../components/BodyContainer';
import MainLayout from '../layouts/MainLayout';
const { Title, Paragraph, Text, Link } = Typography;

function About() {
    return (
        <MainLayout>
            <BodyContainer>
                <div className='about-container'>
                    <Row>
                        <Col md={10} sm={24} xs={24}>
                            <div style={{ textAlign: 'center' }}>
                                <div>
                                    <Title className='about-title' level={2}>Welcome to <Text className='clr-pri'>발</Text><Text className='clr-sec'>짝</Text>.</Title>
                                    <Paragraph>
                                        <Text>건강하고 맛있는 안주가 가득한 퓨전술집</Text><br />
                                        <Text><b>대표메뉴</b>: 먹태, 짝태, 건어물, 닭발, 직화요리, 떡볶이, 파스타</Text>
                                    </Paragraph>
                                </div>
                                <div className='about-sub-container'>
                                    <div className='about-subtitle'>
                                        <PhoneOutlined />
                                        <Text>연락처</Text>
                                    </div>
                                    <div className='about-sub-content'>
                                        <Text>서울특별시 중랑구 중랑역로 73</Text>
                                        <Link href='tel:02-493-0110' style={{ color: 'inherit' }}>02-493-0110</Link>
                                        <Link href='mailto: conex2@naver.com' target="_blank" style={{ color: 'inherit' }}>conex2@naver.com</Link>
                                    </div>
                                </div>
                                <div className='about-sub-container'>
                                    <div className='about-subtitle'>
                                        <ClockCircleOutlined />
                                        <Text>영업시간</Text>
                                    </div>
                                    <div className='about-sub-content'>
                                        <Text>월 17:00 - 02:00</Text>
                                        <Text>화 17:00 - 02:00</Text>
                                        <Text>수 17:00 - 02:00</Text>
                                        <Text>목 17:00 - 02:00</Text>
                                        <Text>금 17:00 - 03:00</Text>
                                        <Text>토 17:00 - 03:00</Text>
                                        <Text>일 17:00 - 02:00</Text>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={14} sm={24} xs={24}>
                            <div className='about-photo'>
                                <div className='about-photo-left'>
                                    <Image 
                                        preview={false}
                                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak-view.jpg" 
                                    />  
                                    {/* <Image width={350} src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak-menu1.jpg" />   */}
                                </div>
                                <div className='about-photo-right'>
                                    <Image 
                                        preview={false} 
                                        src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/balzzak-menu2.jpg" 
                                    />  
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </BodyContainer>
        </MainLayout>
        
    );
}

export default About;