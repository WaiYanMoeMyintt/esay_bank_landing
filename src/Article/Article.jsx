import React from 'react'
import "./Article.css";
import {article} from "../bankData";
const Article = () => {
  return (
    <div className = "article-container">
          <div className='article-title'>
                <h1>We Recommend Articles</h1>
          </div>
          <div className='article-page'>
                {
                    article.map((item,index)=>(
                        <div key={index} className='article-page-container'>
                             <img src = {item.img} alt = {item.alt}/>
                             <h6>{item.author}</h6>
                             <h3>{item.title}</h3>
                            <p>{item.text}</p> 
                        </div>
                    ))
                }
          </div>
    </div>
  )
}

export default Article