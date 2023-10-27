import ProductItem from "../components/ProductItem";
import './css/productlist.css';
import { getCourses } from "../api/api";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductList(){
  const [searchParam,setSearchParam] = useSearchParams();
  const initKeyword = searchParam.get('keyword');
  const [keyword,setKeyword] = useState(initKeyword || '');
  const courses = getCourses(initKeyword);

  const handleKeywordChange = (e) => setKeyword(e.target.value);
  const handSubmit = (e) => {
    e.preventDefault();
    setSearchParam(keyword ? {keyword} : {})
  }


  return(
    <div id="product">
      <form onSubmit={handSubmit}>
        <input type="text" placeholder="검색하기" 
        onChange={handleKeywordChange}/>
        <button type="submit">검색</button>
      </form>
      <div className="container">
        <p> 총 {courses.length}개의 상품이 검색되었습니다</p>
        <div>
          {
            courses.map((course) => (<ProductItem key={course.id} course={course}/>))
          }
        </div>
      </div>
    </div>
  )
}