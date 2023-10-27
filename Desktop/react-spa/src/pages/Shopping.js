import { Link } from "react-router-dom";
import './css/shopping.css';
import { clearAllItems,removeCart } from "../api/api";
import data from '../api/data.json';
import { useDispatch, useSelector } from "react-redux";
export default function Shopping(){
  const {cartProductIds} = useSelector(state => state.cart);
  const dispatch = useDispatch()
  const cartProductData = data.filter(
    product => cartProductIds.includes(product.id)
  );
  return(
    <>
    <section className="cart">
      <div className="cart_information">
        <ul>
        <li>장바구니 상품은 최대 30일간 저장됩니다.</li>
        <li>가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.</li>
        <li>오늘출발 상품은 판매자 설정 시점에 따라 오늘출발 여부가 변경될 수 있으니 주문 시 꼭 다시 확인해 주시기 바랍니다.</li>
        </ul>
      </div>

      <div className="cart__list">
          <thead>
          <tr>
            <td><input type="checkbox"/></td>
            <td colspan="2">상품정보</td>
            <td>옵션</td>
            <td>상품금액</td>
            <td>배송비</td>
          </tr>
          </thead>
          
            {cartProductData.map(product=> {
              return (
                <>
                <tbody>
                <tr class="cart__list__detail" key={product.id}>
                <td><input type="checkbox" /></td>
                <td>
                    <img src={product.photoUrl} alt="1.png" />
                </td>
                <td>
                  <Link to="/">
                    설화수  
                  </Link>
                  <span class="cart__list__smartstore" >설화수 스토어</span>
                    <p>[설화수] {product.title} </p>
                    <span class=" price">{product.price}</span>
                </td>
                <td class="cart__list__option">
                    <p>상품 주문 수량: 1개</p>
                    <button class="cart__list__optionbtn"
                    onClick={() => dispatch(removeCart(product.id))}>선택상품 삭제</button>
                </td>
                <td ><span class="price">{product.price}</span><br />
                    <button class="cart__list__orderbtn">주문하기</button>
                </td>
                <td>무료</td>
                </tr>
                </tbody>
            </>
              )
            })}   
          </div>
          <div class="cart__mainbtns">
            <Link to= '/'>
            <button class="cart__bigorderbtn left">쇼핑 계속하기</button>
            </Link>
            <button class="cart__bigorderbtn right">주문하기</button>
        </div>
    </section>
    <div className="bottom">
      {cartProductData.length < 1 && (
        <>
      <dl>
      <dt>장바구니에 담긴 상품이 없습니다.</dt>
      <dd>
        <img src="/img/shopping.png"/>
      </dd>
      <dd>원하는 메뉴를 장바구니에 담고 한번에 주문해보세요!</dd>
    </dl>
      <Link to= '/'>
       <p><button type="button">브랜드 쇼핑하러가기</button></p> 
      </Link></>
      )}
    
    </div>
    </>
  )
}