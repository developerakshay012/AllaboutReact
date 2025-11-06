import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGIf from './Hook/useGIf';

const API_KEY = 'dGrYzO6z47DjnM6DNy9OLT0Q8WOhoMxW';

const Tag = () => {

  const [tag ,setTag] = useState('')
    // const [gif, setGif] = useState('');
  // const [loading ,setLoading] = useState(false);
  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   // console.log("New GIF URL:", imageSource); 
  //   setGif(imageSource);
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const{gif,loading,fetchData} = useGIf(tag);

 




  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl underline uppercase font-bold'>Random gif</h1>

      {
        loading ? (<Spinner/>): (<img src={gif} key={gif} className="max-w-full " alt="Random Gif" />)
      }

      <input 
        className='w-10/12  text-lg py-2 rounded-lg cursor-pointer bg-white mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      
      <button
        onClick={() => fetchData(tag)}
         className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg cursor-pointer mb-2'
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
