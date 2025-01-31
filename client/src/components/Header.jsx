import React from "react";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-2100 shadow-md text">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to={'/'}>
        <h1 className="text-xl  sm:text-3xl font-bold  flex flex-wrap">
          <span className="text-slate-800">SP</span>
          <span className="text-green-400">RealState</span>
        </h1>
        </Link>
        <form className="bg-slate-100 border p-2 rounded-lg flex items-center " >
          <input type="text" className="bg-transparent focus:outline-none w-24 sm:w-64" placeholder="Search...." />
          <FaSearch className="text-slate-400 "/>
        </form>
        <ul className="flex gap-4 ">
          <Link to={'/'}><li className="hidden sm:inline hover:underline text-green-600 font-semibold">Home</li></Link>
         <Link to={'/about'}><li className="hidden sm:inline hover:underline text-green-600 font-semibold">About</li></Link>
         <Link to={'signin'}> <li className="hover:underline text-green-600 font-semibold" >SignIn</li></Link>
        </ul>
      </div>
    </header>
  );
}
