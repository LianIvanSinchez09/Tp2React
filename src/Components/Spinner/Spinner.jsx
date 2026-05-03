import React from 'react'

const Spinner = () => {
  return (
    <div class="flex justify-center items-center relative ">
      <div class="relative text-center right-15">
          <div class="w-20 h-20 rounded-full absolute
          border-8 border-solid border-gray-200"></div>
          <div class="w-20 h-20 rounded-full animate-spin absolute
          border-8 border-solid border-purple-500 border-t-transparent"></div>
          </div>
      </div>
  )
}

export default Spinner
