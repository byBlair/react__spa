import courses from './data.json';
import {  createSlice } from "@reduxjs/toolkit";

export function getCourses(keyword){
    if(!keyword) return courses;
    return filterByKeyword(courses,keyword);
}

function filterByKeyword(items,keyword){
    const lowered = keyword.toLowerCase();
    return items.filter(({title}) => title.toLowerCase().includes(lowered));
}

export function getCoursesBySlug(courseSlug){
    return courses.find((course) => course.slug === courseSlug)
}

//검증이름, 속성

const WISHLIST_KEY = 'wishlist';
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY) || '{}');

export function getWishList(){
    return courses.filter((course) => wishlist[course.slug])
}
export function addWishList(courseSlug){
    wishlist[courseSlug] = true;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
}
export function deleteWishList(courseSlug){
    delete wishlist[courseSlug]
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}


const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        cartProductIds : []
    },
    reducers : {
        addTocart(state,action){
            state.cartProductIds = [action.payload,...state.cartProductIds]
        },
        removeCart(state,action){
            const indexOfId = state.cartProductIds.indexOf(action.payload)
            state.cartProductIds.splice(indexOfId,1);
        },
        clearAllItems(state){
            state.cartProductIds = []
        }
    }
})
export let {addTocart,clearAllItems,removeCart} = cartSlice.actions
export default cartSlice;

