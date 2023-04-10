import React , {useState, useEffect} from 'react'
import BlogList from './BlogList'
import Axios from 'axios'


export const Home = () => {
    const [blogs, setBlogs] = useState([null])
    const [isPending, setIsPending] =useState (true)
    
    const handleDelete =(id)=>{
        const newblogs = blogs.filter((blog)=>blog.id !== id)
        setBlogs(newblogs)
    }

    useEffect(()=>{
        {
         Axios.get('http://localhost:8000/blogs')
         .then ((res)=>{
            console.log(res.data)
            setBlogs(res.data)
         })
        };
        
    },[])
    
  return (
    <div className='home'>
     
    {blogs && <BlogList blogs={blogs}  handleDelete={handleDelete}/>}   
    
    </div>
  )
}
