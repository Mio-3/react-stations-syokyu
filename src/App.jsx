// DO NOT DELETE
import * as React from 'react'
import './App.css'
import {useState} from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://images.dog.ceo/breeds/dhole/n02115913_1796.jpg","success");
  const FechData = () => {
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
    .then((response) => response.json())
    .then((data) => {
      setDogUrl(data.message);
    });
    
  }
  
  
  return (
    <div>
      <header className='head'>Dogアプリ</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} className='picture' alt="犬の画像を取得するAPIです。" />
      <button onClick={FechData} className='button'>更新</button>
    </div>
  );
}
