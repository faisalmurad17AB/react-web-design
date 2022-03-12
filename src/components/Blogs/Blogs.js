import React from 'react'
import BlogItems from './BlogItems'
import './blog.css'
const Blogs = () => {
    return (
        <section className="section-grey medium-padding-bottom" id="blog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Our Blog</h2>
                    </div>
                </div>
                <div className="row">
                    {BlogItems.map(item => (

                    <div className="col-md-4">
                        <div className="blog-item">
                            <div className="popup-wrapper">
                                <div className="popup-gallery">
                                    <a href="#">
                                        <img src={item.img} className="width-100" alt="pic" />
                                        <span className="eye-wrapper2"><i>{item.icon}</i></span>
                                    </a>
                                </div>
                            </div>
                            <div className="blog-item-inner">
                                <h3 className="blog-title"><a href="#">{item.blogInner.title}</a></h3>
                                <a href="#" className="blog-icons last"><i >{item.blogInner.icon}</i> {item.blogInner.marketing} &amp; {item.blogInner.design} &#8212; {item.blogInner.read}</a>
                                <p>{item.blogInner.desc}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs
