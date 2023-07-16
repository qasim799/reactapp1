import React from 'react';
import {Link} from 'react-router-dom';
export const Navbar = () => {
    return(
<nav className="flex sm:justify-center space-x-4 rounded-lg">
 <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"><Link to='/todos'>Show Todo list</Link></button>
 <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"><Link to='/addlist'>Add List</Link></button>
 <button className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"><Link to='/removelist'>Remove Lists</Link></button> 
</nav>
    )
}
