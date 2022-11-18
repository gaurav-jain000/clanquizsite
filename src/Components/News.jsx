import React, { useState } from 'react'
import Loader1 from './Loader1'

const News = () => {
  const [articles, setArticles] = useState(null)
  const [check, setCheck] = useState(0)
  const generateNews = () => {
    if(check === 0){
      setCheck(check + 1)
    }
    try {
      fetch("https://newsdata.io/api/1/news?apikey=pub_136410ad4de3102e1ae0a612b7642a735092f&language=en&page=30")
        .then(res => res.json())
        .then(data => {
          setArticles(data.results)
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='news-section-head h-0 rounded-top bg-dark text-light py-2 px-3'>
        Recent News
      </div>
      <div className={`news-section-body ${check ? "vh-75" : "vh-75"} d-flex flex-column align-items-center rounded-bottom bg-grey`}>
        <button className='btn btn-primary rounded-pill my-2 px-3' onClick={generateNews}> Fetch News </button>
        {
          articles
            ?
            <div>
              <ul className=' list-unstyled animation-appear-smooth'>
                {
                  articles.map((elem, index) => {
                    return (
                      <li key={index} className="w-100 border-bottom p-3 text-justify d-inline-block">
                        <a href={elem.link}>{elem.title}</a> <br />
                        <p>
                          <span className="fs-6">{elem.description}</span>
                          <br />
                          <span className='text-secondary'> - by {elem.source_id}</span>
                        </p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            :
            <div className={`${check ? "" : "display-hidden"}`}>
              <Loader1 text="Loading News" loaderColor="dark" />
            </div>
        }
        <div className={`scroll-div w-100 ${articles ? "sticky-bottom" : "display-hidden"} text-light text-center m-0 py-3`}>
          Scroll for more...
        </div>
      </div>
    </>
  )
}

export default News
