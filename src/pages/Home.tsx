import { Button, Col, Image, Modal, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";

import BodyContainer from "../components/BodyContainer";
import MainLayout from "../layouts/MainLayout";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.less';
import HomeIntroCard from "../components/HomeIntroCard";


const { Title, Paragraph } = Typography;

function Home() {
    const navigate = useNavigate();
    
    return (
        <MainLayout>
            <div className='home-carousel'>
                <Carousel className='pc-only' autoPlay infiniteLoop showThumbs={false}>
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-1.jpg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-2.jpg"
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-3.jpg" 
                        preview={false}
                    />
                    <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <ReactPlayer 
                            className='pc-only'
                            url={[
                                { src: '/video/store-view.mp4', type: 'video/mp4' },
                            ]}
                            width='80%' 
                            height='80%'
                            controls={false} 
                            playing 
                            loop
                            muted
                        />    
                    </div>
                    
                </Carousel>
                <Carousel className='mobile-only' autoPlay infiniteLoop showThumbs={false}>
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-1.jpg" 
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-2.jpg"
                        preview={false}
                    />
                    <Image 
                        src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/carousel-3.jpg" 
                        preview={false}
                    />
                </Carousel>
            </div>
            <BodyContainer>
                <div className='home-container'>
                    <ReactPlayer 
                        className='mobile-only'
                        style={{ marginTop: 20 }}
                        url={[
                            { src: '/video/store-view.mp4', type: 'video/mp4' },
                        ]}
                        width='100%' 
                        height='260px'
                        controls={false} 
                        playing 
                        loop
                        muted
                    />    
                    
                    <Row className='home-intro-restaurant'>
                        <Col xs={24} sm={24} md={16} className='home-intro-restaurant-col1' >
                            <div style={{ display: 'flex' }}>  
                                <HomeIntroCard 
                                    text='발짝스토리'
                                    imgUrl='https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/home-card-1.jpg'
                                    clickFunc={() => { navigate('/balzzak-story'); }}
                                />
                                <HomeIntroCard 
                                    text='대표메뉴'
                                    imgUrl='https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/home-card-2.jpg'
                                    clickFunc={() => { navigate('/featured-menu'); }}
                                />
                                <HomeIntroCard 
                                    text='창업이벤트'
                                    imgUrl='https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/home-card-3.jpg'
                                    clickFunc={() => { Modal.info({ content: '[선착순 전수창업 10호점까지 전수비 반값]' }); }}
                                />
                                <HomeIntroCard 
                                    text='본점월별매출'
                                    imgUrl='https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/home-card-4.jpg'
                                    clickFunc={() => { 
                                        Modal.info({ 
                                            content: 
                                                <div>
                                                    <p>2022년 매출 현황</p>
                                                    <ul>
                                                        <li>11월 2900만원</li>
                                                        <li>10월 3200만원</li>
                                                        <li>09월 3000만원</li>
                                                        <li>08월 2900만원</li>
                                                        <li>07월 3100만원</li>
                                                        <li>06월 3000만원</li>
                                                        <li>05월 3300만원</li>
                                                    </ul>
                                                </div> 
                                        }); 
                                    }}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={8} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50, marginBottom: 50 }}>
                            <div className='home-balzzak-system'>
                                <Title style={{ marginTop: 0 }}>발짝 전수창업 안내</Title>
                                <Paragraph style={{ fontSize: 16 }}>
                                    누구나 쉽게 따라할수있는 초간단 레시피와 1인 매장부터 오토매장까지 일하기 좋은 시스템구축. 운영노하우 및 경험까지 모두 전수하여 소자본 알짜 매장이 가능하고 창업자의 취향에 따라 맞춤가게 설정과 본점과의 지속적인 소통과 정보로 오래가는 전수창업 
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