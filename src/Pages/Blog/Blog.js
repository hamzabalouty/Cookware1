import React, { useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { blogData } from "../../data";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog">
      <div className="blog-title">
        <h2>Blog</h2>
        <p>Home / Blog</p>
      </div>
      <div className="blog-container">
        <div className="blog-left">
          {blogData.map((i) => (
            <div key={i.id} className="blog-left-box">
              <img src={i.img} alt="blog-box-img" />
              <h5>{i.date}</h5>
              <h2>{i.title}</h2>
              <p>{i.desc}</p>
              <button>READ MORE</button>
            </div>
          ))}
        </div>
        <div className="blog-right">
          <div className="blog-right-box">
            <h3>RECENT POSTS</h3>
            <div className="blog-right-post">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/08/blog-img1-150x150.jpg"
                alt="blog-right-img"
              />
              <p>Blog Post With Image</p>
            </div>
            <div className="blog-right-post">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/08/blog-img2-150x150.jpg"
                alt="blog-right-img"
              />
              <p> Blog Post With Image Slider</p>
            </div>
            <div className="blog-right-post">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/08/blog-img3-150x150.jpg"
                alt="blog-right-img"
              />
              <p>Blog Post With Custom Quote</p>
            </div>
            <div className="blog-right-post">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/08/blog-img4-150x150.jpg"
                alt="blog-right-img"
              />
              <p> Blog Post with Youtube Video</p>
            </div>
            <div className="blog-right-post">
              <img
                src="https://ciyashop.potenzaglobalsolutions.com/cookware/wp-content/uploads/sites/90/2017/08/blog-img5-150x150.jpg"
                alt="blog-right-img"
              />
              <p> Blog Post with Audio</p>
            </div>
          </div>
          <div className="blog-right-box">
            <h3>ARCHIVES</h3>
            <p>> August 2017</p>
            <p>> July 2017</p>
          </div>
          <div className="blog-right-box">
            <h3>META</h3>
            <p>> Log In</p>
            <p>> Entries Feed</p>
            <p>> Comments Feed</p>
            <p>> WordPress.Org</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;