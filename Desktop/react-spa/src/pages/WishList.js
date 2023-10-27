import { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { deleteWishList,getWishList } from "../api/api";
import './css/wishlist.css';
export default function WishList(){
  const [course,setCourse] = useState([])
  const handDelete = (courseSlug) => {
    deleteWishList(courseSlug);
    const nextCourses = getWishList();
    setCourse(nextCourses);
  }
  useEffect(() => {
    const nextCourses = getWishList();
    setCourse(nextCourses)
  },[])
  return(
    <div className="wishlist">
      <dl>
          <dt>나의 위시리스트</dt>
          <dd>WishList</dd>
      </dl>
      <ul>
        <div>
        {course.map((course) => (
          <li key={course.slug}>
            <ProductItem course={course}/>
          <button 
          type="button"
          onClick={() => handDelete(course.slug)}>
            삭제하기
          </button>
        </li>
          ))}
        </div>
      </ul>
    </div>
  )
}