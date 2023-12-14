// @ts-check
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import BreedsSelect from "./BreedsSelect"
import DogImage from "./DogImage"

export const DogListContainer = () => {
  const [breeds,setBreeds] = useState([]);
  const [selectedBreed,setSelectedBreed] = useState('');
  const handleBreedChange = e => {
    setSelectedBreed(e.target.value)
  }
  useEffect(() => {
    fetch ("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(dogData => setBreeds(dogData.message))
      .then(console.log(breeds))
  }, [])

  const handleShowImage = () => {
    fetch("https://dog.ceo/api/breed/hound/images/random/3")
      .then(response => response.json())
      .then(data => {
        setDogImages(data.message);
      })
  }

  return (
    <div>
      <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange = {handleBreedChange}/>
      <button onClick={handleShowImage}>表示</button>
      console.log(dogImage)
    </div>
  );
};

export default DogListContainer
