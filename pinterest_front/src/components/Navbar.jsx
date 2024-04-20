import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios, {Axios} from 'axios'

const Navbar = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  axios.post('http://127.0.0.1:8000/api/signup',{
    email,
    password,
  }).then(({data})=>{
    console.log(data);
  })

  const handleOpenSignup = () =>{
    setIsSignUp(!isSignUp)
  }
  return (
    <>
    <div className={`w-full fixed z-10 bg-white`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="0 0 48 48"
                version="1.1"
              >
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Color-"
                    transform="translate(-300.000000, -260.000000)"
                    fill="#CC2127"
                  >
                    <path
                      d="M324.001411,260 C310.747575,260 300,270.744752 300,284.001411 C300,293.826072 305.910037,302.270594 314.368672,305.982007 C314.300935,304.308344 314.357382,302.293173 314.78356,300.469924 C315.246428,298.522491 317.871229,287.393897 317.871229,287.393897 C317.871229,287.393897 317.106368,285.861351 317.106368,283.59499 C317.106368,280.038808 319.169518,277.38296 321.73505,277.38296 C323.91674,277.38296 324.972306,279.022755 324.972306,280.987123 C324.972306,283.180102 323.572411,286.462515 322.852708,289.502205 C322.251543,292.050803 324.128418,294.125243 326.640325,294.125243 C331.187158,294.125243 334.249427,288.285765 334.249427,281.36532 C334.249427,276.10725 330.707356,272.170048 324.263891,272.170048 C316.985006,272.170048 312.449462,277.59746 312.449462,283.659905 C312.449462,285.754101 313.064738,287.227377 314.029988,288.367613 C314.475922,288.895396 314.535191,289.104251 314.374316,289.708238 C314.261422,290.145705 313.996119,291.21256 313.886047,291.633092 C313.725172,292.239901 313.23408,292.460046 312.686541,292.234256 C309.330746,290.865408 307.769977,287.193509 307.769977,283.064385 C307.769977,276.248368 313.519139,268.069148 324.921503,268.069148 C334.085729,268.069148 340.117128,274.704533 340.117128,281.819721 C340.117128,291.235138 334.884459,298.268478 327.165285,298.268478 C324.577174,298.268478 322.138649,296.868584 321.303228,295.279591 C321.303228,295.279591 319.908979,300.808608 319.615452,301.875463 C319.107426,303.724114 318.111131,305.575587 317.199506,307.014994 C319.358617,307.652849 321.63909,308 324.001411,308 C337.255248,308 348,297.255248 348,284.001411 C348,270.744752 337.255248,260 324.001411,260"
                      id="Pinterest"
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
            
            </div>
            <div className="hidden lg:block">
              <ul className="ml-12 inline-flex space-x-8">
                <li>
                  <NavLink
                    to="/"
                    className={({isActive}) => `inline-flex ${isActive ? 'text-orange-700' : 'text-black'} items-center text-sm font-semibold text-gray-800 hover:text-gray-900`}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/explore"
                    className={({isActive}) => `inline-flex ${isActive ? 'text-orange-700' : 'text-black'} items-center text-sm font-semibold text-gray-800 hover:text-gray-900`}
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                      to="/createPage"
                      className={({isActive}) => `inline-flex ${isActive ? 'text-orange-700' : 'text-black'} items-center text-sm font-semibold text-gray-800 hover:text-gray-900`}
                    >
                      Create
                  </NavLink>
                </li>
                <li>
                <p
                    onClick={handleOpenSignup}
                    className={`inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900`}
                    >
                      SignUp
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex grow justify-center">
              <input
                className="flex h-10 w-4/5 rounded-full bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Serach"
                />
            </div>
            <div className="ml-2 mt-2 hidden lg:block">
              <span className="relative inline-block">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?rs=1&pid=ImgDetMain"
                  alt="Dan_Abromov"
                />
              </span>
            </div>
            <div className="ml-2 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 cursor-pointer"
              >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
              </svg>
            </div>
          </div>
    </div>
    <hr/>

  {isSignUp && <div id="authentication-modal" tabindex="-1"  
  className={`overflow-y-auto fixed w-full h-full opacity-100  overflow-x-hidden z-50`}>
  <div aria-hidden="true" onClick={handleOpenSignup} class="fixed inset-0 w-full h-full bg-black opacity-75 cursor-pointer">
  </div>
      <div className="relative p-4 w-full top-1/2 -translate-y-1/2 max-w-md max-h-full mx-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Sign in to our platform
                  </h3>
                  <button onClick={handleOpenSignup} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span className="sr-only">Close modal</span>
                  </button>
              </div>
              <div className="p-4 md:p-5">
                  <form className="space-y-4" action="#">
                      <div>
                          <label for="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                          <input type="email" value={email} onChange={(e) => {setEmail(e.target.value); console.log(email)}} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                      </div>
                      <div>
                          <label for="password" value={password} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                          <input type="password" onChange={(e) => {setPassword(e.target.value); console.log(password)}} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                      </div>
                      {/* <div className="flex justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                  <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                              </div>
                              <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                          </div>
                          <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                      </div> */}
                      <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                          Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>} 

    </>
  );
};

export default Navbar;
