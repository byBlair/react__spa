import './css/footer.css';

export default function Footer(){
  return(
    <footer>
      <div>
      <dl className="address">
        <dt>(주)아모레퍼시픽</dt>
        <dd>서울특별시 용산구 한강대로 100(한강로2가)</dd>
        <dd>080-030-5454 (쇼핑문의) / 080-023-5454 (제품문의)</dd>
        <dd>support_kr@amoremall.com (주문/배송/쇼핑 문의)</dd>
        <dd>biz_amoremall@amorepacific.com (비즈니스 문의)</dd>
      </dl>
      <dl className="Name">
        <dt>대표이사 : 김승환 / 사업자등록번호 : 106-86-43373</dt>
        <dd>통신판매업신고번호 : 2017-서울용산-1308 사업자 정보 확인</dd>
        <dd>건강기능식품판매업 영업신고증 제8호</dd>
        <dd>호스팅제공자 : (주)아모레퍼시픽</dd>
      </dl>
      <p>개별 판매자가 입점하여 등록한 상품에 대한 광고, 상품주문, 배송, 환불의 의무와 책임은 각 입점판매자가 부담하고, 이에 대하여 ㈜아모레퍼시픽은 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.
      중개판매 분쟁해결 기준</p>
      <dl>
        <dt>구매안전서비스 제공 안내가입 사실 확인</dt>
        <dd>저희 쇼핑몰은 고객님의 안전거래를 위해 모든 무통장입금 주문에 대해 KG이니시스의 에스크로 구매안전서비스를 자동 적용하고 있습니다.</dd>
      </dl>
      <small>© AMOREPACIFIC CORPORATION. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}