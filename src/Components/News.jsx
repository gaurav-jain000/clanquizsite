import React, { useEffect, useState } from 'react'
import Loader1 from './Loader1'

const News = () => {
  // News API key = 9cec3c7e4af441cfb361513c09c67a09
  const [articles, setArticles] = useState(null)
  const generateNews = () => {
    try {
      fetch("https://newsapi.org/v2/everything?q=Quiz&apiKey=9cec3c7e4af441cfb361513c09c67a09")
        .then(res => res.json())
        .then(data => {
          setArticles(data.articles)
        })
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    generateNews();
  }, [])

  return (
    <>
      <div className='news-section-head h-0 rounded-top bg-dark text-light py-2 px-3'>
        Recent News of our Quiz world
      </div>
      <div className='news-section-body rounded-bottom bg-grey py-2 px-2'>
        {
          articles
            ?
            <div>
              <ul className=' list-unstyled animation-appear-smooth'>
                {
                  articles.map((elem, index) => {
                    return (
                      <li key={index} className="w-100 border-bottom p-3 text-center d-inline-block">
                        <img className="pb-3" src={elem.urlToImage} alt="" />
                        <br />
                        <a href={elem.url}>{elem.title}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            :
            <Loader1 text="Loading News" loaderColor="dark" />
        }
        <div className='scroll-div sticky-bottom text-warning text-center p-3 h5'>
          Scroll for more...
        </div>
      </div>
    </>
  )
}

export default News