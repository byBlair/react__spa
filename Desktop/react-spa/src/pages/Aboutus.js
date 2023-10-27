import './css/aboutus.css';
import {AiOutlineDoubleRight} from 'react-icons/ai'
export default function Aboutus(){
    return(
    <>
    <div className="aboutus">
        <dl>
            <dt>About Us</dt>
            <dd>아모레퍼시픽은 변화하는 시대에 맞춰 가치관을 새롭게 정립해왔습니다.</dd>
            <dd>그리고 이를 성장을 위한 나침반으로 삼았습니다. 아모레퍼시픽은 이 세상 모든 이들이 아름답다고 맏습니다.</dd>
            <dd>모두가 자신만의 아름다움을 발견하고 실현하는 삶이 모여 더 나은 세상을 만들 수 있다고 여깁니다.</dd>
        </dl>
    </div>
    <div id="box1">
    <p>
    <h1>Amorepacipic</h1>
    </p>
    <dl>
        <dt>아모레퍼시픽만이 창조하는 아름다움으로 새로운 역사를 써 내려갑니다.<br />
        사람과 세상을 더 아름답게 하는 소명을 이루고자 미의 여정을 이어갑니다.
        </dt>
        <dd>자세히 보기 <AiOutlineDoubleRight /></dd>
    </dl>
    
    </div>
    <div id="box2">
    <p>
    <h1>Research & Innovation</h1>
    </p>
    <dl>
      <dt>최초, 최고의 제품을 전 세계에 전하기 위한 혁신적인 연구개발과 좋은 원료, <br />
      첨단기술을 토대로 세계가 주목하는 아름다움을 만들어 냅니다.
      </dt>
      <dd>자세히 보기 <AiOutlineDoubleRight /></dd>
    </dl>
    </div>
    <div id="box3">
    <p>
    <h1>Visual Identity</h1>
    </p>
    <dl>
      <dt>기업 및 브랜드의 철학과 가치를 담아 소통하고 있습니다. 특히, 아라따 글꼴은 아름다운<br />
      문화를 사회와 공유하는 문화나눔의 일환으로써 누구에게나 무료로 배포되는 아리따운 서체입니다.
      </dt>
      <dd>자세히 보기 <AiOutlineDoubleRight /></dd>
    </dl>
    
    </div>
    </>
    )
}