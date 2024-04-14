import React from 'react'

const SinglePhoto = ({showOption, src}) => {
  return (
    <>

        <div onMouseOver={showOption} onMouseOut={showOption} className='relative'>
        <img 
        src={src}
        alt="Image 1"
        className='object-cover w-full'
        />
        <div className="hover-option hidden">
          <div className="absolute top-0 right-0 m-3">
            <button className='text-white bg-red-600 px-3 py-2 rounded-full'>Save</button>
          </div>
          <div className="absolute bottom-0 right-0 m-3 flex gap-1">
              <button className='bg-white rounded-full p-1'>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
              </button>
              <button className='bg-white rounded-full p-1'>
              <svg fill="#000000" height="25px" width="25px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path className="cls-1" d="M8,6.5A1.5,1.5,0,1,1,6.5,8,1.5,1.5,0,0,1,8,6.5ZM.5,8A1.5,1.5,0,1,0,2,6.5,1.5,1.5,0,0,0,.5,8Zm12,0A1.5,1.5,0,1,0,14,6.5,1.5,1.5,0,0,0,12.5,8Z"></path> </g></svg>
              </button>
          </div>
        </div>
      </div>  
    </>
  )
}

export default SinglePhoto
