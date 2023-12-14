// DO NOT DELETE
import * as React from 'react'
import './App.css'
import {useState} from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl,setDogUrl] = useState("https://dog.ceo/dog-api/")
  const changeDog = () => setDogUrl("https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg")

  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} alt="犬の画像を取得するAPIです。" />
      <button onClick={changeDog}>更新</button>

    </div>
  );
}
