import React from 'react';
import {Link} from "react-router-dom"
import {useParams} from 'react-router-dom'
const { useState, useEffect } = React;
export default function BlogPage(){
  const {id}= useParams()
  const [scrollProgress, setScrollProgress] = useState(0);
  const [blog, setBlog] = useState({
   
  });
  useEffect(() => {
  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    
    const scrollTop = window.scrollY;
    
    const progress = (scrollTop / totalHeight) * 100;
    
    setScrollProgress(progress);
  };
  
  window.addEventListener("scroll", handleScroll);
  
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
useEffect(() => {
  fetchPost()
}, [])

const fetchPost = async () => {
  try {
    const res = await fetch(`https://blogsite-bdkx.onrender.com/api/posts/${id}`);
    const data = await res.json();
    setBlog(data);
  } catch (e) {
    console.log(e)
  }
}
  return(
    <div>
    <div className="progress-bar">
  <div
    className="progress-fill"
    style={{ width: `${scrollProgress}%` }}
  />
</div>
    <main className="post-page">

  <Link to="/" className="back-btn">
    ← Back to Logs
  </Link>

  <div className="post-category">
    TECHNOLOGY
  </div>

  <h1 className="post-title">
    {blog.title}
  </h1>

  <div className="post-meta">

    <span>
      {blog.createdAt}
    </span>

    <span>•</span>

    <span>
      5 min read
    </span>

  </div>

  <div className="post-image">

    <img
      src={blog.image}
      alt={blog.title}
    />

  </div>

  <article className="post-content">

    <p>
      {blog.body}
    </p>

  </article>

  <div className="post-footer">

    <div className="footer-card">

      <span>
        END OF ENTRY
      </span>

      <h3>
        Thanks for reading.
      </h3>

      <p>
        More thoughts, experiments and ideas are available in the archive.
      </p>

    </div>

  </div>

</main>
</div>
  )
}