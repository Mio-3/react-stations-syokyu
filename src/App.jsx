// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <p>犬の画像を表示するサイトです。</p>
      <img src="https://dog.ceo/api/breeds/image/random" alt="犬の画像を取得するAPIです。" />

    </div>
    
  )
}
