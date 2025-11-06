import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGIf from './Hook/useGIf';

const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

const Random = () => {

  // const [gif, setGif] = useState('');
  // const [loading ,setLoading] = useState("false");
  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   // console.log("New GIF URL:", imageSource); 
  //   setGif(imageSource);
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const {gif,loading ,fetchData} = useGIf();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl underline uppercase font-bold'>Random gif</h1>

      {
        loading ? (<Spinner/>): (<img src={gif} key={gif} width="450" alt="Random Gif" />)
      }

      
      <button
        onClick={clickHandler}
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg cursor-pointer mb-[20px]'
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
