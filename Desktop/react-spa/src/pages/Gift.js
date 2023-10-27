import './css/gift.css'
export default function Gift(){
    return(
        <>
        <div className="gift">
            <dl className="main">
                <dd>SULWHASOO GIFT</dd>
                <dt>설화수의 특별한 선물</dt>
                <dd>설화수가 진심을 담아 준비한 포장서비스, 지함보를 만나보세요</dd>
            </dl>
            <div className="jihambo">
                <dl className="box001">
                        <dt>손쉽게 재활용이 가능한 파우치 지함보</dt>
                        <dd>파우치 지함보</dd>
                        <dd>자세히 보기</dd>
                </dl>
                <dl className="box002">
                        <dt>예와 정성을 보여주는</dt>
                        <dd>사각보자기 지함보</dd>
                        <dd>자세히 보기</dd>
                </dl>
            </div>
            <div className='main02'>
            <dl>
                <dt>지함보</dt>
                <dd>JIHAMBO</dd>
                <dd>전통의 지혜와 정성의 함을 담은 보자기라는 뜻의 지함보는<br/>
                과하지 않은 설화수만의 기품을 보여주는 섬세한 포장 요소 하나 하나를 통해<br/>
                주는 이의 마음과 받는 이의 기쁨도 담아낸 설화수만의 시그니처 서비스입니다</dd>
            </dl>
            <img src='./img/jihanbo.png' alt='jihanbo'/>
            </div>
        </div>
        <img src='./img/jihanbo2.png' alt='jihanbo2'/>
        </>
    )
}