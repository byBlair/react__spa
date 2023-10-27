import { Link } from "react-router-dom";
import Logo from '../assets/sulwhasoo2.png';
import {AiFillHeart,AiFillHome} from 'react-icons/ai';
import {BsFillBasket3Fill} from 'react-icons/bs';

import './css/nav.css';
export default function Nav(){
  return(
    <header>
      <div>
        <h1><Link to='/'>
          <img src={Logo} alt="logo" />  
          </Link>
        </h1>
          <ul className="icons">
            <li>
              <Link to= '/shopping'>
                <BsFillBasket3Fill />
              </Link>
            </li>
            <li>
              <Link to='/wishlist'>
                <AiFillHeart />
              </Link>
            </li>
            <li>
              <Link to= '/login'>
                <AiFillHome />
              </Link>
            </li>
          </ul>
        </div>
          
          <nav>
          <ul className="bars">
            <li>
              <Link to= '/list'>
                전체 상품
              </Link>
            </li>
            <li>
              <Link to= '/brands'>
                Brands
              </Link>
            </li>
            <li>
              <Link to= '/magazine'>
                Magazine
              </Link>
            </li>
            <li>
              <Link to= '/aboutus'>
                About Us
              </Link>
            </li>
            <li>
              <Link to= '/gift'>
                Gift
              </Link>
            </li>
          </ul>
        </nav>
      
    </header>
  )
}