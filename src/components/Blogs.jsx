import React from 'react'
import Blog1 from '../assets/blog1.jpg';
import Blog2 from '../assets/blog2.jpg';
import Blog3 from '../assets/blog3.jpg';


import './Blog.css';
const Blogs = () => {
  return (
    <div className='blog-container'>
    <div className='blog-title'>
                  <h1>Recent Blog</h1>
                 <a href='#'> View All Posts</a> 

    </div>
<div className='blog-content'>
      <div className='blogs'>
         <img src={Blog1}/>
        <div className='blog-text'>
          <h5>Modern Interior Design Studio</h5>
          <span> By <b>Kristin Watson </b> on <b>Dec 19, 2021</b></span>
        </div>
      </div>
      {/* blogs 2 */}
      <div className='blogs'>
         <img src={Blog2}/>
        <div className='blog-text'>
          <h5>How to keep your furniture Clean</h5>
          <span> By <b>Robert Fox  </b> on <b>Jan 29, 2021</b></span>
        </div>
      </div>
      {/* blogs3 */}
      <div className='blogs'>
         <img src={Blog3}/>
        <div className='blog-text'>
          <h5>Small space Furniture Apartment ideas</h5>
          <span> By <b> Kristin Watson </b> on <b>Dec 11, 2021</b></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Blogs