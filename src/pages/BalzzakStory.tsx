import { Col, Divider, Image, Row, Typography } from 'antd';
import { italic } from 'chalk';
import BodyContainer from "../components/BodyContainer";
import MainLayout from "../layouts/MainLayout";

import './BalzzakStory.less';

const { Title, Text, Paragraph } = Typography;

function BalzzakStory() {
    return (
        <MainLayout>
            <BodyContainer>
                <div className='story-container'>
                    <Row>
                        <Col md={10} sm={24} xs={24}>
                            <Image 
                                style={{ borderRadius: 15 }}
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/balzzak-story.png" 
                                preview={false}
                            />
                        </Col>
                        <Col md={14} sm={24} xs={24} style={{ padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Title>발짝스토리</Title>
                            <Paragraph style={{ fontSize: 16, lineHeight: '32px' }}>창업의 꿈을 갖고 있던 직장생활 7년차에 회사를 그만두고, 2016년 9월에 프렌차이즈브랜드 "건어물포차"를 창업하여 10평가게 7테이블로 장사를 시작하였습니다. 그러나 프렌차이즈 가맹점의 갑질과 아이템의 한계를 느껴 많은 노력끝에.. 새롭게 도약 하고자 1년 6개월 만에 프렌차이즈 가맹점에서 나와 그자리에서 다시 "발짝"이란 퓨전술집을 만들어 새롭게 다시 개업을 하게되었습니다.</Paragraph>
                            <Paragraph style={{ fontSize: 16, lineHeight: '32px' }}>닭발과 짝태가 우리가게의 대표메뉴 이기에 고민하다.. 발짝의 발은 닭발의 <span style={{ fontStyle: 'italic', fontWeight: 600 }}>"발"</span>. 짝은 짝태의 <span style={{ fontStyle: 'italic', fontWeight: 600 }}>"짝"</span>. 각각 한글자씩 가져와 혼합하여 스토리와 재미도 줄수있고 한번보면 깊은 인상은 줄수있는 상호를 만들게되었습니다</Paragraph>
                            <Paragraph><b>발짝 본점</b> - 이상철<br /><b>전수창업 관련 각종 문의</b> - 010 4742 0110 </Paragraph>
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col md={10} sm={24} xs={24}>
                            <Image 
                                style={{ borderRadius: 15 }}
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/story-vision.jpg" 
                                preview={false}
                            />
                        </Col>
                        <Col md={14} sm={24} xs={24} style={{ padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Title>비전</Title>
                            <Paragraph style={{ fontSize: 16, lineHeight: '32px' }}>프렌차이즈가맹점 영업당시 월매출 400~600만원.. 간판을 교체하고 개인점 "발짝"시작. 월매출 1000~1400만원 최근 전달기준 2022년 4월 매출은 2500만원 어떻게 보면 매출이 크진 않지만 술집장사의 홍보와 마케팅의 한계점 그리고 1차집에 비해 낮은 테이블회전율 무권리 월세100만원 10평 7테이블 동네 C급 상권을 생각하고 본다면 확실한 아이템의 매력과 가게운영 노하우는 누구나 따라 할수 없을거라 판단 하실수 있을거라 생각합니다.</Paragraph>
                            <Paragraph style={{ fontSize: 16, lineHeight: '32px' }}>작은 고추가 맵다는 말이 생각 나실 겁니다. 월매출 500에서 2500만원까지 약 5배 가량이 상승은 우연이 아닌 발짝만의 가질수 있는 매력과 여러 운영 노하우를 지닌 발짝만의 힘이 아닐까 생각됩니다. 발짝 매장이 더욱 많은 지역, 그리고 많은 사람들이 맛있는 음식들과 분위기를 즐겼으면 하고 창업자의 개인 취향이 들어간 전수창업을 계획하게 되었습니다.</Paragraph>
                        </Col>
                    </Row>
                </div>
            </BodyContainer>
        </MainLayout>     
    );
}

export default BalzzakStory;