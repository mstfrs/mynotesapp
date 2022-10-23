import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, filterNote } from "../redux/notes/mynotesSlice";
import { nanoid } from "nanoid";

const InputArea = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.mynotes.notes);
  const filterednotes = useSelector((state) => state.mynotes.filterednotes);
  console.log(filterednotes)
  console.log(notes);
  const [mynote, setMynote] = useState({
    id: nanoid(8),
    title: "",
    description: "",
    color: "bg-green-600",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setMynote((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMynote((values) => ({ ...values, id: nanoid(8) }));
    dispatch(addNote(mynote));
    
    e.target.reset();
  };

  

  return (
    <div className="flex lg:flex-row md:flex-row flex-col lg:justify-around p-4 h-screen bg-gray-700">
       
      <div className="bg-slate-700 lg:p-6 md:p-4 lg:w-2/5 w-full flex flex-col justify-between md:justify-items-center" >
      <div>
            <p className="text-white text-3xl font-bold text-center">My Notes App</p> 
        </div>
        <form onSubmit={handleSubmit} >
          <div className="my-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="py-2 px-4  bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="title" className="sr-only">
                Your Note Title
              </label>
              <input
                id="title"
                rows="4"
                type="text"
                className="px-0 w-full text-sm border-y-4  text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a Title..."
                required
                name="title"
                onChange={handleChange}
              ></input>
            </div>
            <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="note" className="sr-only">
                Your Note
              </label>
              <textarea
                id="note"
                rows="4"
                className="px-0 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Your note..."
                required
                name="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-evenly flex-col items-center py-2 px-3 border-t dark:border-gray-600">
              <button
                type="submit"
                className=" items-center py-2.5 px-4 text-sm font-medium text-center w-40 text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
              >
                Add Note
              </button>
              <div className="flex  pl-0 space-x-1 sm:pl-2">
                <div className="flex ">
                  <div className="flex items-center mr-4">
                    <input
                      id="green-radio"
                      type="radio"
                      value="bg-green-600"
                      name="color"
                      
                      className="w-4 h-4 bg-green-600 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="green-radio"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-green-600 p-2 w-16 m-2 rounded-full"
                    >
                      Green
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="purple-radio"
                      type="radio"
                      value="bg-purple-600"
                      name="color"
                      className="w-4 h-4 bg-purple-600 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="purple-radio"
                      className="ml-2 text-sm font-medium text-gray-900 bg-purple-600 dark:text-gray-300  p-2 m-2 w-16 rounded-full"
                    >
                      Purple
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="teal-radio"
                      type="radio"
                      value="bg-teal-600"
                      name="color"
                      className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="teal-radio"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 bg-teal-600 p-2 m-2 w-16 rounded-full"
                    >
                      Teal
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <p className="text-white text-center">developed by  <span className="text-gray-400">mustafa örs</span> </p>
      </div>

      <div className=" flex flex-col  w-full p-5 bg-slate-500 ">
        <div className="flex justify-evenly align-middle content-center">
          <label htmlFor="search-input" className="font-bold text-2xl">
            Search
          </label>
          <input
            type="text"
            id="search-input"
            className="bg-gray-300 m-3 h-8 w-2/4 rounded-lg outline outline-2 pl-5"
        
            onChange={(e)=>dispatch(filterNote(e.target.value))}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 place-self-center w-1/2 lg:w-full md:w-full">
          { (filterednotes.length===0? notes:filterednotes).map((note) => (
            <div key={note.id} className=" items-center object-center self-center content-center m-auto w-full">
              <a
                href="#/"
                className={`block p-6 max-w-sm  rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ${note.color} `}
              >
                <div className="">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-800 dark:text-white">
                  {note.title}
                </h5>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 float-right"
                  onClick={()=> dispatch(deleteNote(note.id))}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>

                
                </div>
               

                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {note.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputArea;
