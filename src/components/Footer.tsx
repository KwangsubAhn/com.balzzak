import { useState } from 'react';
import { Button, Modal, Typography } from 'antd';
import { InstagramOutlined, MailOutlined } from '@ant-design/icons';

import './Footer.less';

const { Text, Paragraph, Link } = Typography;
export const FOOTER_HEIGHT = 210;

function Footer() {
    const [isModalPrivacy, setIsModalPrivacy] = useState(false);
    const [isModalEmail, setIsModalEmail] = useState(false);
    const setModalEmail = () => {
        Modal.info({
            title: '이메일무단수집거부',
            content: (
            <Paragraph>
                발짝 웹사이트 이용자에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해,
                본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여
                무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
            </Paragraph>          
            ),
            onOk() {},
          });
    }

    return (
        <div className='footer-container' style={{ height: FOOTER_HEIGHT }}>
            <div className='footer-div1'>
                <div className='footer-div1-text'>
                    <Link onClick={() => { setIsModalPrivacy(true); }}>개인정보처리방침</Link> <Text>|</Text> <Link onClick={setModalEmail}>이메일 무단수집거부</Link>
                </div>
                <div className='footer-div1-icons'>
                    <Link href='https://www.instagram.com/balzzak_sulzip' target="_blank">
                        <InstagramOutlined />
                    </Link>
                    <Link href='mailto: conex2@naver.com' target="_blank">
                        <MailOutlined />
                    </Link>
                </div>
            </div>
            <div className='footer-div2'>
                <div>
                    <Paragraph>대표: 이상철 | 사업자등록번호: 000-00-00000</Paragraph>
                    <Paragraph>서울특별시 중랑구 중랑역로 73 | <Link href='tel:02-493-0110'>TEL: 02-493-0110</Link></Paragraph>
                    <Paragraph>Copyright © {new Date().getFullYear()} BALZZAK SULZIP All rights Reserved.</Paragraph>
                </div>
                <div className='footer-div2-developer'><Text>Developed by K. Ahn</Text></div>
            </div>
            <Modal 
                title="개인정보처리방침" 
                visible={isModalPrivacy}
                onCancel={() => { setIsModalPrivacy(false); }}
                footer={[
                    <Button onClick={() => { setIsModalPrivacy(false); }} type="primary">
                        <Text style={{ color: '#fff' }}>OK</Text>
                    </Button>
                ]}
                width={'85%'}
                bodyStyle={{ height: '60vh', overflowY: 'scroll' }}
            >
                <Paragraph>발짝은 이용자들의 개인정보보호를 중요시하며, 이용자가 회사의 서비스를 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다. 이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망 이용촉진 및 정보보호 등에관한 법률 등 정보통신서비스 제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및정보통신부가 제정한 개인정보보호지침을 준수하고 있습니다. 회사는 개인정보 취급방침을 통하여이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해어떠한 조치가 취해지고 있는지 알려 드립니다</Paragraph>
                <Paragraph>회사는 개정된 정보통신망법 제22조 1항, 제24조의2 제1항, 제25조 1항의 내용을 통해 발짝의 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드리고, 동의를 받기 위해 아래 고지합니다. 자세히 읽어보시고 동의 여부를 선택하여 주시기 바랍니다.</Paragraph>
                <Paragraph>1. 개인정보의 수집목적 및 이용목적</Paragraph>
                <Paragraph>"개인정보"라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 연락처등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다. 대부분의 발짝 서비스는 별도의 사용자 등록이 없이 언제든지 사용할 수 있습니다. 회사는 상담서비스를 통하여 이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다.</Paragraph>
                <Paragraph>
                    첫째, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다.<br />
                    회사는 신규 서비스개발이나 컨텐츠의 확충 시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선 순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.</Paragraph>
                <Paragraph>
                    둘째, 수집하는 개인정보 항목과 수집 및 이용목적은 다음과 같습니다.<br />
                    -성명, 이메일주소, 휴대폰번호: 예약 및 상담 서비스 이용에 따른 본인 확인 절차에 이용<br />
                    -기타 선택항목: 개인맞춤 서비스를 제공하기 위한 자료<br />
                    -IP Address: 불량회원의 부정 이용 방지와 비인가 사용 방지<br />
                </Paragraph>

                <Paragraph>2. 수집하는 개인정보 항목 및 수집방법</Paragraph>
                <Paragraph>회사는 이용자들이 상담서비스를 이용하기 위해 상담요청을 등록할 때 필수적인 정보들을 온라인상에서 입력 받고 있습니다. 상담입력할 때 필수적인 정보는 이름, 연락처, 이메일 주소 등입니다. 또한 양질의 서비스 제공을 위하여 이용자들이 선택적으로 입력할 수 있는 사항으로서 상담내용 등을 입력 받고 있습니다.</Paragraph>

                <Paragraph>3. 수집하는 개인정보의 보유 및 이용기간</Paragraph>
                <Paragraph>이용자가 상담 서비스를 이용하는 동안 회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다. 다만, 아래의 "6. 이용자 자신의 개인정보 관리(열람,정정,삭제 등)에 관한 사항" 에서 설명한 절차와 방법에 따라 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다. 그리고 "2. 수집하는 개인정보 항목 및 수집방법"에서와 같이 일시적인 목적 (설문조사, 이벤트, 본인확인 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이 불가능한 상태로 처리됩니다.</Paragraph>
                <Paragraph>귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. 다만, 회사는 불량 상담의 부정한 이용의 재발을 방지하기 위해, 이용계약 해지일로부터 1년간 해당 상담고객의 연락처, 이메일주소를 보유할 수 있습니다.</Paragraph>
                <Paragraph>
                    - 계약 또는 청약철회 등에 관한 기록 : 5년<br />
                    - 대금결제 및 재화 등의 공급에 관한 기록 : 5년<br />
                    - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년<br />
                </Paragraph>
                
                <Paragraph>회사는 귀중한 회원의 개인정보를 안전하게 처리하며, 유출의 방지를 위하여 다음과 같은 방법을 통하여 개인정보를 파기합니다.</Paragraph>
                <Paragraph>
                    - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br />
                    - 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다 
                </Paragraph>

                <Paragraph>4. 개인정보의 위탁처리</Paragraph>
                <Paragraph>
                    발짝은 서비스 향상을 위해서 귀하의 개인정보를 어떠한 업체에도 제공하지 않습니다.<br />
                    - 개인정보의 처리를 위탁하거나 제공하는 경우에는 수탁자, 수탁범위, 공유 정보의 범위 등에 관한 사항을 서면, 전자우편, 전화 또는 홈페이지를 통해 미리 귀하에게 고지합니다.
                </Paragraph>
            </Modal>
            <Modal 
                title="이메일무단수집거부"
                visible={isModalEmail}
                onCancel={() => { setIsModalEmail(false); }}
                footer={[
                    <Button onClick={() => { setIsModalEmail(false); }}>
                        <Text>확인</Text>
                    </Button>
                ]}
                width={'85%'}
                bodyStyle={{ height: '60vh', overflowY: 'scroll' }}
            >
                <Paragraph>
                    발짝 웹사이트 이용자에게 무차별적으로 보내지는 타사의 메일을 차단하기 위해,
                    본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여
                    무단으로 수집되는 것을 거부하며, 이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
                </Paragraph>
                
                
            </Modal>
        </div>
    );
}

export default Footer;
