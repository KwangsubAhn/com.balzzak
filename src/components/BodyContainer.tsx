import './BodyContainer.less';

function BodyContainer(props: any) {
    const { children } = props;

    return (
        <div className='body-container'>
            { children }
        </div>
    );
}

export default BodyContainer;