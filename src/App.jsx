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
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="犬の画像を取得するAPIです。" />
      <button onClick={FechData}>更新</button>

    </div>
  );
}
