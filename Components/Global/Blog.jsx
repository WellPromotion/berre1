import React from 'react'
import Link from 'next/link';

export default function BlogSingle(data) {

    const blogPost = data.data;
    
    return (
        <div className="column is-4">
          <div className="blogs-wrap">
            <img src={blogPost.featuredImage !== null ? blogPost.featuredImage.node.sourceUrl : "/placeholder.jpg"} className="blog-image" alt=""/>
            <div className="blog-wrapper">
              <div className="blog-top">
                <div className="blog-cont">
                  <p className="blog-title">{blogPost.title}</p>
                  <div className="blog-info">
                    <p className="author">Berre Team</p>
                    <p className="date">{blogPost.date.split("T").shift()}</p>
                  </div>
                </div>
              </div>
              
              <div className="blog-excerpt">
                <div dangerouslySetInnerHTML={{  __html: blogPost.excerpt }}></div>
                <Link href={`/blogs/${blogPost.slug}`}><button className="button blog-more">View more <img src="/but-next.svg" alt="" /></button></Link>
              </div>
            </div>
          </div>
        </div>
    )
}
