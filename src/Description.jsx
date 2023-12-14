// @ts-check
import {DogImage} from './DogImage';
import {useState} from 'react'


export const Description = () => {
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/dhole/n02115913_1796.jpg");
  
  
  const exchangeDogUrl = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDogUrl(data.message);
    })
    .catch((error) => {
      console.log('Error:', error);
    })
  }
  
    return (
        <div>
          <p>犬の画像を表示するサイトです。</p>
          <DogImage imageUrl = {dogUrl} />
          <button onClick = {exchangeDogUrl}>更新</button>
        </div>
  );
}

export default Description
