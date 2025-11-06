import './App.css'
import Random from './Components/Random'
import Tag from './Components/Tag'

function App() {

  return (
    <>

    <div className='w-full flex flex-col background relative  items-center'>
          <h1
  className="
    bg-white/20 
    backdrop-blur-md 
    border border-white/30
    rounded-xl 
    w-11/12 
    mx-auto 
    text-center 
    mt-10 
    py-4 px-12 
    text-4xl 
    font-extrabold 
    text-white 
    shadow-lg 
    tracking-wide
  "
>
  RANDOM GIFS
</h1>

          <div className='flex flex-col w-full items-center gap-10 mt-[30px]'>
            <Random/>
            <Tag/>
          </div>
    </div>
     </>
  )
}

export default App
