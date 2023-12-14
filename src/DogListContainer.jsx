// @ts-check
import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState([])
  useEffect(() => {
    fetch ("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(dogData => setBreeds(dogData.message))
      .then(console.log(breeds))
  }, [])
}

export default DogListContainer
