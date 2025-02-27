import React from 'react'

const TryForFreeBtn = () => {
  return (
    <div className='flex justify-center mt-3'>
    <button
        className={` px-4 py-3 rounded-[58px] bg-indigo01 mt-8 text-white font-medium text-sm sm:text-xl`}
    >
        <div className='flex items-center gap-4'>Try VidAU Video Ad Maker for Free</div>
    </button>
</div>
  )
}


const WhiteTryForFreeBtn = () => {
    return (
      <div className='flex justify-center mt-3'>
      <button
         className={` px-4 py-3 rounded-[58px] text-indigo01 mt-8 bg-white font-medium text-sm sm:text-xl`}
      >
          <div className='flex items-center gap-4'>Try VidAU Video Ad Maker for Free</div>
      </button>
  </div>
    )
  }
  
  export  { WhiteTryForFreeBtn, TryForFreeBtn}