import { Typography, Row, Col, Image } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import './About.less';
const { Title, Paragraph, Text, Link } = Typography;

function About() {
    return (
        <div className='about-container'>
            <Row>
                <Col span={10}>
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
                        <div className='about-sub-container'>
                            <div className='about-subtitle'>
                                <ClockCircleOutlined />
                                <Text>연락처</Text>
                            </div>
                            <div className='about-sub-content'>
                                <Text>서울특별시 중랑구 중랑역로 73</Text>
                                <Link href='tel:02-493-0110' style={{ color: 'inherit' }}>02-493-0110</Link>
                                <Link href='mailto: conex2@naver.com' target="_blank" style={{ color: 'inherit' }}>conex2@naver.com</Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={14}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div style={{ textAlign: 'right', paddingRight: 30, display: 'flex', alignItems: 'center' }}>
                            <Image 
                                preview={false}
                                style={{ marginBottom: 30 }}
                                width={380} 
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak-view.jpg" 
                            />  
                            {/* <Image width={350} src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak-menu1.jpg" />   */}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Image width={300} preview={false} src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak-menu2.jpg" />  
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default About;