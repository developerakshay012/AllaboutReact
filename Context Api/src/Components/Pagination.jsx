import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {


  const{page , handleChange ,totalpages } = useContext(AppContext)
  return (
    <div className='w-full flex justify-center items-center border-[0.5px] py-2 fixed bottom-0 bg-white '>
      <div className='flex justify-between w-11/12 max-w-[670px] '>
      <div className='flex gap-x-2'>
          { page > 1 &&
            (<button 
            className='rounded-md border-[0.5px] py-1 px-4'
             onClick={() => handleChange(page-1)}>
              Previous
            </button>)
        }

        { page < totalpages && 
          (<button 
          className='rounded-md border-[0.5px] py-1 px-4 text-center'
          onClick={()=> handleChange(page+1)}>
              Next
          </button>)
        }
      </div>
        

        <p className='font-bold text-sm '>Page {page} of {totalpages}</p>

      </div>
    </div>
  )
}

export default Pagination;