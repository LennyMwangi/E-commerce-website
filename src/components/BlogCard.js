import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="col-3">
        <div className="blog-card">
            <div className="card-image">
                <img src="images/" className="img-fluid" alt="blog"/>
            </div>
            <div className="bog-content">
                <p className="date">29 Sep, 2023</p>
                <h5 className="title">A Friday Morning Renaissance</h5>
                <p className="desc">Lorem ipsum</p>
                <Link to="/" className="button">Read More</Link>
                
            </div>
        </div>
    </div>
  );
};

export default BlogCard;