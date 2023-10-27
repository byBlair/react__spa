import { Link } from 'react-router-dom';
import './css/productItem.css';
import { AiFillStar } from 'react-icons/ai';

export default function ProductItem({course}){
  return(
    <figure className="pic">
      <img src={course.photoUrl} alt={course.title} />
      <figcaption>
        <dl>
          <dt>
            <Link to={`/list/${course.slug}`}>
             <span>10%</span>{course.price} 
            </Link>
            </dt>
          <dd>
          <Link to={`/list/${course.slug}`}>
            {course.title}
          </Link>
            </dd>
            <dd><AiFillStar />{course.stars} 리뷰{course.review}</dd>
        </dl>
      </figcaption>
    </figure>
  )
}