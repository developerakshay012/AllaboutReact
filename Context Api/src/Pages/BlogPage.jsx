import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../BaseURl';

const BlogPage = () => {
    const [blog ,setBlog] = useState(null);
    const [relatedblogs , setRelatedblogs] = useState([])
    const location = useLocation();
    const navigation = useNavigation();
    const {setLoading,loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);




    async function fetchRelated() {
      setLoading(true)
      let url = `${baseUrl}?blogId=${blogId}`;
      try{
          const result = await fetch(url)
          const data = await result.json()
          setBlog(data.blog);
          setRelatedblogs(data.relatedblogs)
      }catch(error){
          console.log("error aa gya hai bhai ");
          setBlog(null)
          setRelatedblogs([])
          loading(false)
      }
    }

    useEffect( () => {
      if(blogId){
        fetchRelated();

      }
    } ,[location.pathname])




  return (
    <div>
      <Header/>

    <div>
      <button onClick={ () => navigation(-1)}>Back</button>
    </div>
    {
     loading ? 
      (<div>
        <p>Loading</p>
      </div>) :
      blog ? 
      (<div> 
        <BlogDetails post= {blog}/>
        <h2>Related Blogs</h2>
        {
          relatedblogs.map( ()=>{
            <div key={post.id}>
              <BlogDetails post={post}/>
            </div>
          })
        }
      </div>) : (
        <div> 
          <p>No Blog Found</p>
        </div>
      )
    }


    </div>
  )
}

export default BlogPage;