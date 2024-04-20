import React from "react";
import { useState } from "react";

function CreatePage() {
  const [select, setSelect] = useState(false);
  const handleSelectClick = () => {
    setSelect(!select);
  };
  const handleDiselectClick = () => {
    setSelect(false);
  };
  return (
    <>
      <div className="h-20 card font-bold m-5">Create Pin</div>
      <hr />
      <div className="flex flex-wrap -mx-3 mb-6 items-center justify-center">
        <div className="items-center justify-center mx-20 w-80">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
        <form className="w-full max-w-lg">
          <div className="flex flex-col justify-center">
            <div className="lg:w-full md:w-1/2 px-3 mb-6 mt-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-title"
              >
                Title
              </label>
              <input
                className="appearance-none block w-full border border-red-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-title"
                type="text"
                placeholder="Add a title"
              />
            </div>
            <div className="lg:w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-2"
                htmlFor="grid-description"
              >
                Description
              </label>
              <input
                className="appearance-none block w-full border border-red-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-description"
                type="text"
                placeholder="Add a detailed description"
              />
            </div>
            <div className="lg:w-full md:w-1/2 px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
                htmlFor="grid-link"
              >
                Link
              </label>
              <input
                className="appearance-none block w-full border border-red-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-link"
                type="link"
                placeholder="Add a link"
              />
            </div>
            {select && (
              <div className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700 absolute">
                <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      Jese Leos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Jese image"
                      />
                      Robert Gough
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Jese image"
                      />
                      Bonnie Green
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-4.jpg"
                        alt="Jese image"
                      />
                      Leslie Livingston
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-5.jpg"
                        alt="Jese image"
                      />
                      Michael Gough
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Jese image"
                      />
                      Joseph Mcfall
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Jese image"
                      />
                      Roberta Casas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <img
                        className="w-6 h-6 me-2 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      Neil Sims
                    </a>
                  </li>
                </ul>
                <a
                  href="#"
                  className="flex items-center p-3 text-sm font-medium text-black-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500"
                >
                  <svg
                    style={{ color: "red" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                      fill="red"
                    ></path>{" "}
                  </svg>
                  &nbsp;&nbsp;Create board
                </a>
              </div>
            )}
            <div className="lg:w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
                htmlFor="grid-board"
              >
                Board
              </label>
              <div className="relative">
                <button
                  className="text-gray-500 hover:text-white bg-white-700 border border-red-500 hover:bg-red-800 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 lg:w-full md:w-1/2"
                  type="button"
                  onClick={handleSelectClick}
                  onBlur={handleDiselectClick}
                >
                  Choose a board
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-full md:w-1/2 px-3 mb-6 mt-6 md:mb-0">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-hash-tags"
              >
                Add Hash Tags
              </label>
              <input
                className="appearance-none block w-full border border-red-500 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-hash-tags"
                type="text"
                placeholder="Add hash tags"
              />
            </div>
            <div className="mb-6 px-3">
              <label className="lg:w-full  md:w-1/2 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Allow people to comment</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default CreatePage;
