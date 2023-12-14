// DO NOT DELETE
import './App.css'
import React,{useState} from 'react'
import {Header} from './Header';
import {Description} from './Description';
import BreedsSelect from './BreedsSelect';
import DogListContainer from './DogListContainer';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  // const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/dhole/n02115913_1796.jpg","success");
  // const FechData = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setDogUrl(data.message);
  //   });
    
  // }
  
  
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  );
}
