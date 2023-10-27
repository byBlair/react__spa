import './css/brands.css';
export default function Brands(){
    return(
        <>
        <div className="brands">
            <dl>
                <dt>BUILDING A WORLD OF BEAUTY<br />POWERED BY ART AND HERITAGE</dt>
                <dd>OUR PURPOSE</dd>
                <dd>예술과 헤리티지 정신으로 아름다움을 창조합니다</dd>
                <dd>우리의 고유한 헤리티지와 독자적인 피부 과학을 동력으로<br />시간과 세대를 초월하는 예술 작품과도 같은 제품을 만들어 냅니다.</dd>
                <dd>세상 모든 사람들이 그들이 가진 헤리티지를 바탕으로<br />자신만의 아름다움을 만들 수 있도록 영감을 불어넣을 것입니다.</dd>
            </dl>
        </div>
        <div id='brand'>
        <article className="belief">
            <dl>
            <dt>OUR BELIEF</dt>
            <dd>설화수의 시선은 부분이 아닌 전체를 바라봅니다.<br />
                설화수는 겉으로 드러난 문제뿐 아니라 피부 속 근본 원인까지 주목합니다.<br />
                우리는 피부의 자생력을 회복하는 것이 진정한 해결책이며 피부가 가진 잠재 능력을 활성화 하는 것이 피부 건강을 위한 첫 단계라고 생각합니다.<br />
                이에 설화수는 피부 능력을 활성화하는 윤조에센스를 시작으로 피부를 위한 베스트 스킨케어 루틴을 제안합니다.</dd>
            </dl>
            <img src='./img/belief.png' alt='belief'/>
        </article>
        <article className="ingredient">
            <dl>
            <dt>OUR INGREDIENT</dt>
            <dd>예로부터 인삼은 동서양에서 탁월한 효능을 인정받은 전설적인 뿌리로 알려져 있습니다.<br />
                “먹어서 좋은 인삼, 피부에 발라도 좋지 않을까?’ 라는 호기심에서 시작해 설화수의 건강한 피부를 위한 인삼 연구는 멈추지 않고 이어졌습니다.<br />
                우리는 인삼 연구 선구자로서 피부를 위한 인삼 연구를 거듭한 결과, 궁극의 안티에이징을 위한 인삼의 효능을 피부에 전달하는 해답을 찾아냈습니다.</dd>
            </dl>
            <img src='./img/ingredient.png' alt='ingredient'/>
        </article>
        <article className="innovation">
            <dl>
            <dt>OUR INNOVATION</dt>
            <dd>설화수의 중추에는 설화수 한방 과학 연구 센터가 있습니다.<br />
                설화수 한방 과학 연구 센터는 아시아의 지혜와 현대 과학을 끊임없이 접목하며 설화수만의 혁신을 이끌고 있습니다.<br />
                1960년대부터 시작된 설화수의 인삼 연구는 자연의 재료로 만든 독보적 화장품을 만들기 위해 50여 년이 넘도록 계속되어 왔습니다.<br />
                발전에 발전을 거듭한 현재, 설화수 한방 과학 연구 센터는 건강한 피부를 위한 최고의 솔루션을 끊임없이 만들어내고 있습니다.</dd>
            </dl>
            <img src='./img/innovation.png' alt='innovation'/>
        </article>
        <article className="create">
            <dl>
            <dt>CREATED BY SULWHASOO</dt>
            <dd>설화수가 만드는 제품은 한국의 미학과 현대적 감성이 조화롭게 공존하는 혁신의 결정체입니다.<br />
                아름다운 피부를 위한 끊임 없는 노력과 수십년의 연구로 일구어낸 결과물입니다.<br />
                세대와 시간을 초월해 사랑받는 설화수의 제품은 예술 작품과도 같습니다.</dd>
            </dl>
            <img src='./img/create.jpeg' alt='create'/>
        </article>
    </div>
    </>
    )
}