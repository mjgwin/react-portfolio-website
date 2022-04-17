import React from 'react'
import {Link} from 'react-router-dom';

const MainNav = () => {
  return (
    <header className="bg-background-pattern p-2 flex justify-center" >      
      <nav>
      <div className="text-center p-3 text-5xl font-bold">Micah Dev</div>
        <ul className="flex space-x-4">
          <li className="flex-1 mr-2">
            <Link to="/" className="text-center block border border-black bg-slate-300 rounded p-4 w-48 text-2x hover:bg-gray-400">Main Page</Link>
          </li>
          <li className="flex-1 mr-2">
            <Link to="/projects" className="text-center block border border-black bg-slate-300 rounded p-4 w-48 text-2x hover:bg-gray-400">Projects</Link>
          </li>
          <li className="flex-1 mr-2">
            <Link to="/skills" className="text-center block border border-black bg-slate-300 rounded p-4 w-48 text-2x hover:bg-gray-400">Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNav