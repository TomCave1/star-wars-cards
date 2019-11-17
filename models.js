import { useEffect, useState } from 'react'

export function getAllFilms() {
  // [ stateName, setStateFunction ] = useState(initialValue)
  const [ films, setFilms ] = useState([])
  const [ loading, setLoading ] = useState(true)

  // useEffect() === componentDidMount()
  // useEffect( function, array )
  useEffect(() => {
    async function fetchFilms() {
      const response = await fetch('https://swapi.co/api/films')
      const data = await response.json()
      setFilms(data.results) // data.results === array of film objects
      setLoading(false)
    }
    fetchFilms()
  }, []) // empty array === only run ONCE on initial mount

  return [ films, loading ]
}