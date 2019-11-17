import React from 'react'

import { getAllFilms } from '../models'

const Films = () => {
  // On initial load, films === [], loading === true
  // When getAllFilms has finished getting the data, this Films component will re-render
  // This is because getAllFilms() is a custom useEffect hook
  const [ films, loading ] = getAllFilms()
  
  if (loading) {
    return (
      <p>Loading...</p>
    )
  }

  //We know films have loaded by this point...
  //No need to check film.length > 0 etc

  const filmItems = films.map(({
    title,
    producer
  }, index) => {
    // console.log(film)
    //const {title, }
    return (
      <li key={index}>
        <h3>{title}</h3>
        <p>{producer}</p>
      </li>
    )
  })

  return (
    <ul>{filmItems}</ul>
  )
}

export default Films
