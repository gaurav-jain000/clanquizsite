import React, { useEffect, useState } from 'react'

const FilterMenu = ({ getQuestions, themeObj }) => {
  const [categories, setCategories] = useState([]);
  const generateQuestions = async (address = "https://opentdb.com/api.php?amount=10") => {
    try {
      const res = await fetch(address);
      const data = await res.json();
      getQuestions(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  const filterBtnFunc = () => {
    getQuestions(null);
    let address = `https://opentdb.com/api.php?amount=${document.getElementById("amount").value}`;
    if (document.getElementById("difficulty").value !== "0") {
      address += `&difficulty=${document.getElementById("difficulty").value}`;
    }
    if (document.getElementById("categories").value !== "0") {
      address += `&category=${document.getElementById("categories").value}`;
    }
    if (document.getElementById("type").value !== "0") {
      address += `&type=${document.getElementById("type").value}`;
    }
    generateQuestions(address);
    document.getElementById("filterColl").click();
  }
  const getCategories = async () => {
    try {
      const res = await fetch("https://opentdb.com/api_category.php");
      const data = await res.json();
      setCategories(data.trivia_categories);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getCategories();
    generateQuestions();
    // eslint-disable-next-line
  }, [])


  return (
    <>
      <span id="filterColl" className={`text-uppercase mt-3 fw-bold h5 btn btn-outline-${themeObj.btnColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#filterMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Filter <i className="fa-solid fa-sliders"></i>
      </span>
      {
        <div className="collapse" id="filterMenu">
          <div className={`p-3 gap-2 d-flex flex-column text-${themeObj.textColor} flex-md-row align-items-md-center justify-content-md-around`}>
            <span>
              <label htmlFor="amount">Enter questions:</label>
              <input className='w-100 h-100 py-1' type="number" name="" defaultValue={10} min="10" max="50" id="amount" />
            </span>
            <span>
              <label htmlFor="categories">Select category:</label>
              <select className='h-100 py-1 w-100' id="categories">
                <option value="0">Any Category</option>
                {
                  categories.map(elem => {
                    return <option key={elem.id} value={elem.id}> {elem.name} </option>
                  })
                }
              </select>
            </span>
            <span>
              <label htmlFor="difficulty">Select difficulty:</label>
              <select className='w-100 h-100 py-1' id="difficulty">
                <option value="0">Any Difficulty</option>
                <option value="easy"> Easy </option>
                <option value="medium"> Medium </option>
                <option value="hard"> Hard </option>
              </select>
            </span>
            <span>
              <label htmlFor="type">Select type:</label>
              <select className='h-100 py-1 w-100' id="type">
                <option value="0">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
              </select>
            </span>
            <span>
              <button className={`btn btn-${themeObj.btnColor}`} id="loadMoreBtn" onClick={filterBtnFunc}>Update Questions</button>
            </span>
          </div>
        </div>
      }
    </>
  )
}

export default FilterMenu