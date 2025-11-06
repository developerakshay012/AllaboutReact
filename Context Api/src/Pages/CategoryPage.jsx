import React from 'react'
import { useNavigation , useLocation } from 'react-router-dom';
import Header from '../Components/Header'
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';




const CategoryPage = () => {

const navigation = useNavigation();
const location = useLocation();
const category = location.pathname.split("/").at(-1)


  return (
    <div>
      <Header/>

      <div>
        <button  onClick={() => navigation(-1) }>
          Back
        </button>
        <h2>Blog on <span>{category}</span></h2>
      </div>

      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage