import { Col, Row, Image, Card } from "antd";
import BodyContainer from "../components/BodyContainer";
import BodyTitle from "../components/BodyTitle";
import MainLayout from "../layouts/MainLayout";

import './FeaturedMenu.less';

const list = [
    {
        name: '감바스',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/gambas.jpg'
        
    },
    {
        name: '국물떡볶이튀김',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/국물떡볶이튀김.jpg'
    },
    {
        name: '국물무뼈닭발',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/국물무뼈닭발.jpg'
    },
    {
        name: '두부김치',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/두부김치.jpg'
    },
    {
        name: '맥반석 문어다리',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/맥반석 문어다리.jpg'
    },
    {
        name: '반건조오징어',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/반건조오징어.jpg'
    },
    {
        name: '발짝한상',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/발짝한상.jpg'
    },
    {
        name: '베이컨크림파스타',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/베이컨크림파스타.jpg'
    },
    {
        name: '뼈국물닭발',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/뼈국물닭발.jpg'
    },
    {
        name: '삼겹살 떡볶이',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/삼겹살 떡볶이.jpg'
    },
    {
        name: '삼겹살 비빔면',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/삼겹살 비빔면.jpg'
    },
    {
        name: '손수찢은먹태',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/손수찢은먹태.jpg'
    },
    {
        name: '오징어입',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/오징어입.jpg'
    },
    {
        name: '직화무뼈닭발',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/직화무뼈닭발.jpg'
    },
    {
        name: '직화소금똥집',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/직화소금똥집.jpg'
    },
    {
        name: '직화통닭발',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/직화통닭발.jpg'
    },
    {
        name: '짝태먹태반반',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/짝태먹태반반.jpg'
    },
    {
        name: '치즈듬뿍콘치즈',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/치즈듬뿍콘치즈.jpg'
    },
    {
        name: '치즈오돌뼈주먹밥',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/치즈오돌뼈주먹밥.jpg'
    },
    {
        name: '치즈직화무뼈닭발',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/치즈직화무뼈닭발.jpg'
    },
    {
        name: '하이볼 3종',
        url: 'https://public-dns.s3.ca-central-1.amazonaws.com/com.balzzak/img/featured-menu/하이볼 3종.jpg'
    }
]

function FeaturedMenu() {
    return (
        <MainLayout>
            <BodyTitle text='대표메뉴' />
            <BodyContainer>
                <div className='featured-container'>
                    <Row gutter={[8, 16]}>
                        {
                            list.map((item, index) => {
                                return (
                                    <Col key={index} xs={24} sm={12} lg={6}>
                                        <Card
                                            hoverable
                                            cover={<Image className='featured-card-img' src={item.url} />}
                                            bodyStyle={{ padding: 12, textAlign: 'center' }}
                                        >
                                            <Card.Meta title={item.name} />
                                        </Card>
                                    </Col>  
                                )
                            })
                        }
                    </Row>
                </div>
            </BodyContainer>
        </MainLayout>
    );
}

export default FeaturedMenu;