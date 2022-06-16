import { Col, Row, Image, Typography, Divider } from "antd";
import BodyContainer from "../components/BodyContainer";
import MainLayout from "../layouts/MainLayout";
import './Franchise.less';
const { Title, Paragraph } = Typography;

function Franchise() {
    return (
        <MainLayout>
            <BodyContainer>
                <div className='franchise-container'>
                    <Row>
                        <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 16, order: 1 }} className='franchise-col-content'>
                            <Title>발짝 전수창업?</Title>
                            <Paragraph>발짝 전수창업은 창업자의 취향에따라(인테리어 분위기)등 모두 반영하여 간판 상호만 동일한 조건으로 자유롭게 오픈이 가능합니다.</Paragraph>
                            <Paragraph>업변을 생각하시는분 (강력추천). 처음창업을 시작하시는분 (처음 창업을 하시는분들은 용기와 열정만 있다면..) 소자본 동네상권 1인창업부터 20평이상 오토매장까지 모두 가능합니다! (7년간의 프렌차이즈 가맹점과 개인점 운영노하우로 직원이 일하기 쉽고 피로하지 않는 시스템 구축)</Paragraph>
                            <Title level={4} style={{ marginTop: '0.5em' }}>최근 발짝 본점 매출 (동네상권 10평, 7테이블, 야장2)</Title>
                            <Paragraph>2022년 4월 2500만원<br />2022년 5월 3300만원<br />2022년 6월 3000만원</Paragraph>
                            <Title level={4} style={{ marginTop: '0.5em' }}>-순익율- 동네상권 기준 (상권이 좋을수록 고정비 증가로 순익은 조금씩 떨어짐)</Title>
                            <Paragraph>사장1 알바1 매장은 약50%<br />사장1 직원1 알바1 매장은 약43%<br />직원2 알바1~2 매장은 약37%</Paragraph>
                        </Col>
                        <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 8, order: 2 }} className='franchise-col-photo'>
                            <Image 
                                style={{ borderRadius: 5 }}
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/franchise_col1.jpg" 
                                preview={false}
                            />
                        </Col>
                    </Row>
                    <Divider />
                    <Row>
                        <Col xs={{ span: 24, order: 2 }} sm={{ span: 24, order: 2 }} md={{ span: 8, order: 1 }} className='franchise-col-photo'>
                            <Image 
                                style={{ borderRadius: 5 }}
                                src="https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/franchise_col2.jpg" 
                                preview={false}
                            />
                        </Col>
                        <Col xs={{ span: 24, order: 1 }} sm={{ span: 24, order: 1 }} md={{ span: 16, order: 2 }} className='franchise-col-content'>
                            <Title level={2}>전수내용</Title>
                            <div className='franchise-teaching-list'>
                                <Paragraph>1. 모든 메뉴의 레시피와 소스 (발짝 대표메뉴를 제외한 음식들 또한 창업자의 취향과 상권에 따라 조정 가능합니다. 예를들어 발짝에 없는 메뉴인데 자신있다면 대표 메뉴를 제외한 메뉴중에 빼고 넣으셔도 됩니다)</Paragraph>
                                <Paragraph>2. 메뉴판 제작 지원</Paragraph>
                                <Paragraph>3. 가게운영 노하우 전수 (직원/알바관리 손님관리 매장관리 등등)</Paragraph>
                                <Paragraph>4. 처음 창업을 시작하시는 분들은 입지/상권 전략 또한 짜드리고 오픈 과정 순서 전부 알려드립니다</Paragraph>
                                <Paragraph>5. 홍보/광고 관련 전수</Paragraph>
                                <Paragraph>6. 식자재 전수</Paragraph>
                                <Paragraph>7. 창업후에도 계속 지속적으로 소통하여!! 오래 오래 함께가는 돈버는 가게를 위한 노력 계속 진행!!</Paragraph>
                            </div>
                            <Title level={2} style={{ marginTop: '0.5em' }}>전수비</Title>
                            <Paragraph>전수창업 선착순 10호점까지만 반값으로 진행하고 있습니다. (교육 포함 전수비는 연락주시면 안내해드리겠습니다) 그 외 모든 수수료는 없으며 다 자유입니다.</Paragraph>
                            <Paragraph>전수창업 관련 전화문의는 언제든지 가능하며, 미리 예약하시고 매장에 방문하여 음식 드시면서 1시간정도 상담도 가능합니다. (드신 음식가격만 지불 하시면 됩니다)</Paragraph>
                            <Paragraph>발짝 전수창업 문의 010-4742-0110 발짝인스타그램 @balzzak_sulzip<br />전화나 문자나 인스타 그램 쪽지도 가능해요!!</Paragraph>
                        </Col>
                    </Row>
                </div>
            </BodyContainer>
        </MainLayout>
    );
}

export default Franchise;