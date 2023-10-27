import {BsFillBasket3Fill} from 'react-icons/bs';
import {BsCreditCard} from 'react-icons/bs'
import {TbMoneybag} from 'react-icons/tb'
import {AiFillHeart,AiFillStar} from 'react-icons/ai';
import {CiDeliveryTruck} from 'react-icons/ci'
import './css/Product.css'
import { Link, useParams } from 'react-router-dom';
import { getCoursesBySlug,addWishList } from '../api/api';
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, removeCart } from '../api/api';

export default function Product(){
  const {courseSlug} = useParams();
  const course = getCoursesBySlug(courseSlug);
  const {cartProductIds} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handAddWishList = () =>{
    addWishList(course.slug)
  }
  return(
    <>
    <div id="productItem">
      <img src={course.photoUrl} alt={course.title} />
      <div>
      <dl>
        <dd>
          <Link to='/'>
            설화수 
          </Link>
        </dd>
        <dt>{course.title}</dt>
        <dd></dd>
        <dd><span>10%</span>{course.price}</dd>
        <dd><AiFillStar />{course.stars} 리뷰{course.review}</dd>
    </dl>
    <div className='button'>
    <p>
     <button type="button" onClick={() =>dispatch(addTocart(course.id))}>
       <BsFillBasket3Fill /> 장바구니
     </button>
    </p>
    <p>
      <button type="button"
      onClick={handAddWishList}>
        <AiFillHeart /> 위시리스트
      </button>
    </p></div>
      </div>
    </div>

    <div className='point'>
      <div>
        <p><TbMoneybag /></p>
      <dl className='tb'>
        <dt>뷰티포인트 1% 적립</dt>
        <dd>결제 시 뷰티포인트 전액 사용가능 상품</dd>
      </dl>
      </div>
      <div>
        <p><BsCreditCard /></p>
      <dl className='bs'>
        <dt>결제 헤택 안내</dt>
        <dd>
          <img src='/img/credit.png'/>
        </dd>
      </dl>
      </div>
      <div>
      <p><CiDeliveryTruck /></p>
      <dl className='ci'>
        <dt>무료배송</dt>
        <dd>아모레퍼시픽</dd>
      </dl>
      </div>
    </div>
    <div className='topic'>
      {course.topics.map(({topic}) => (
      <dl key={topic.slug} >
        <dt>제품상세</dt>
        <dd><img src={topic.photoUrl} /></dd>
      </dl>
      ))}
    </div>
    </>
  )
}