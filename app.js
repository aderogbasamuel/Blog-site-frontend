import React from 'react';
import ReactDOM from 'react-dom';

const { useState, useEffect } = React;

function Header() {
  
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    
    <header>
  <div className="logo">
    <span className="prompt">{">"}</span> sam.exe_
  </div>
  <div
    className="menu-btn"
    onClick={() => setOpenMenu(!openMenu)}
  >
    {openMenu ? "✕" : "☰"}
  </div>
  <nav className={openMenu ? "nav active" : "nav"}>
    <a href="">Logs</a>
    <a href="">Projects</a>
    <a href="">Experiments</a>
    <button>
      Contact
    </button>
  </nav>
</header>
    
  )
  
}

export default Header;


function Greeting() {
  const name="Samuel"
  return (
    <h1>Welcome, {name}</h1>
  )
}

function BlogCard({blog}){
  
  const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};
  return(
     <div className="card">
      <div className="img">
        <img src={blog.image} alt="blog 1" />
      </div>
      <div className="content">
        <div className="heading">
          
          <div className="date">
           {formatDate(blog.date)}
          </div>
          
          <div classNsme="title">
           {blog.category}
          </div>
        </div>
        
        <div className="text">
          <h3 className="head">
            {blog.title}
          </h3>
          <div className="subtext">
            {truncateText(blog.body,100)}
          </div>
        </div>
      </div>
      <button type="submit">Read More</button>
      </div>
  )
}

function Blogs(){
  const [blogs, setBlogs]=useState([]);
  useEffect(()=>{
   fetchPosts()
  }, [])
  
  const fetchPosts= async()=>{
    try{
      const res=await fetch("https://blogsite-bdkx.onrender.com/api/posts");
      const data=await res.json();
      setBlogs(data);
    } catch (e) {
      console.log(e) 
    }
  }
  
  return(
    <div className="blogs">
      {blogs.map((blog)=>(
        <BlogCard key={blog.id} blog={blog}/>
      ))}
    </div>
  )
}

function BlogApp() {
  return (
    <div>
      <div className="herosec">
    <div className="herograd">

      <Header/>
<section className="hero">
  <div className="hero-tag">
    PERSONAL TECH • DIGITAL THOUGHTS • INNOVATION
  </div>
  <h1>
    Running ideas <br />
    through the internet.
  </h1>
  <p>
    A personal corner of the web for documenting projects,
    experiments, thoughts, technology and random midnight ideas.
  </p>
  <div className="hero-actions">
    <button className="primary">
      Read Logs
    </button>
<button className="secondary">
  View Projects
</button>
  </div>
  
</section>


    
    </div>
  </div>
  
  
  
  <div className="body">
    
    <Blogs/>
   
  </div>
  
  
  
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(<BlogApp />);