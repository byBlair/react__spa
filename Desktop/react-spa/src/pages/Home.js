import ProductItem from "../components/ProductItem";
import './css/Home.css';
import { getCourses } from "../api/api";
import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation} from 'swiper/modules';

export default function Home(){
  const courses = getCourses();
  return(
    <>
    <div class="mySwiper">
    <Swiper pagination={{
          type: 'progressbar',
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
  >
      <ul>
        <SwiperSlide>
        <li>
          <dl>
            <dt>My Firtst Sulwhasoo<br/>나의 첫 설화수</dt>
            <dd>설화수를 처음 경험하는 당신에게</dd>
          </dl>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="insam">
          <dl>
            <dt>인삼, 아름다움 그리고 설화수</dt>
            <dd>NEW BRAND FILM</dd>
          </dl>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="daliy">
          <dl>
            <dt>피부를 밝히는 데일리 루틴</dt>
            <dd>Amore Mall (8.28 ~ 8.31)</dd>
          </dl>
        </li>
        </SwiperSlide>
        <SwiperSlide>
        <li className="jisul">
          <dl>
            <dt>THE ULTIMATE S CREAM</dt>
            <dd>NEW 진설크림</dd>
          </dl>
        </li>
        </SwiperSlide>
      </ul>
      </Swiper>
    </div>
    <article id="box02">
    <h1>Ranking</h1>
    <div>
    <figure className="pic">
      <p>1.</p>
      <img src='./img/1.png' alt="1.png"/>
      <Link to= '/list/01'>
      <figcaption>
        <dl>
          <dt><span>10%</span>140,000원</dt>
          <dd>나의 첫 설화수(윤조에센스 6세대 90ml 기획세트) (90ml+35ml+5ml)</dd>
        </dl>
      </figcaption>
      </Link>
    </figure>
    <figure className="pic">
      <p>2.</p>
      <img src='./img/2.png' alt="1.png"/>
      <Link to='/list/02'>
      <figcaption>
        <dl>
          <dt><span>10%</span>126,000원</dt>
          <dd>에센셜 컴포트 데일리 루틴(자음 2종)(쇼핑백포함) (150ml+125ml)</dd>
        </dl>
      </figcaption>
      </Link>
    </figure>
    <figure className="pic">
      <p>3.</p>
      <img src='./img/5.png' alt="1.png"/>
      <Link to='/list/05'>
      <figcaption>
        <dl>
          <dt><span>10%</span>112,500원</dt>
          <dd>본윤 데일리 루틴(설화수맨2종) (140ml+90ml)</dd>
        </dl>
      </figcaption>
      </Link>
    </figure>
    <figure className="pic">
      <p>4.</p>
      <img src='./img/4.png' alt="1.png"/>
      <Link to='/list/04'>
      <figcaption>
        <dl>
          <dt><span>10%</span>171,000원</dt>
          <dd>탄력케어 에센셜 리추얼(탄력에센셜3종) (150ml+125ml+50ml)</dd>
        </dl>
      </figcaption>
      </Link>
    </figure>
    </div>
    </article>
    <article id="box03">
    <h1>Best Sellers</h1>
    <div>
    <dl>
      <dt>베스트셀러</dt>
      <dd>건강하게 빛나고 힘 있게 채우는<br/>설화수의 시그니처 케어</dd>
      <dd><button type="button">자세히 보기</button></dd>
    </dl>
    </div>
    </article>
    <article id="box04">
    <h1>전체상품</h1>
    <div>
        {
          courses.map((course) => (<ProductItem key={course.id} course={course}/>))
        }
    </div>
    </article>
    </>
  )
}