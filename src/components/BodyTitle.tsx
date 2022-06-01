import { Image, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface IProps {
    text: string;
}

function BodyTitle(props: IProps) {
    const { text } = props;

    return (
        <div style={{ backgroundColor: 'black', position: 'relative' }}>
            <Image
                style={{ opacity: '0.3' }}
                preview={false}
                width={'100%'}
                height={180}
                src="https://public-dns.s3.ca-central-1.amazonaws.com/images/balzzak/cuisine+1600x660.jpeg"
            />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, height: 180, width: '100%', fontSize: 28 }}>
                <Text style={{ color: 'white' }}>
                    { text }
                </Text>
            </div>
        </div>
    );
}

export default BodyTitle;