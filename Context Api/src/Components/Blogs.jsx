import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

    const {posts, loading} = useContext(AppContext)
    console.log("printin inside blog componentes");
    console.log(posts);

  return (
    <div className='w-11/12  max-w-[672px] flex flex-col gap-y-7 py-7 mt-[68px] mb-[70px] justify-center items-center '>
      {
        loading ?
        (<Spinner/>): (
        posts.length === 0 ? 
        (<div> 
            <p>No Post Found</p>
          </div>) :
          (posts.map( (post) => (
            <div key={post.id}>
              <p className='font-bold text-[1.18rem]'>{post.title}</p>
              <p className='text-[15px]'>
                By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
              </p>
              <p className='text-[15px]'>Posted on {post.date}</p>
              <p className='text-[17px] mt-[10px]'>{post.content}</p>
              <div className='flex gap-x-3'>{post.tags.map( (tag ,index)=> {
                  return <span className='text-blue-700 underline font-bold text-[13px]' key={index}>{`#${tag}`}</span>
              })}</div>
            </div>
          )))
        )
      }
    </div>
  )
}

export default Blogs