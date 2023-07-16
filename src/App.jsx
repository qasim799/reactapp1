import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Navbar} from './Navbar';
import AddList from './pages/AddList';
import Todos from './pages/Todos';
import RemoveList from './pages/RemoveList';
export default function App() {

  return (
  <div className= "flex flex-col items-center justify-start w-screen h-screen bg-gray-700">
  <>
  <Navbar />
  <Routes>
    <Route path='/addlist' element={<AddList />}/>
    <Route path='/todos' element={<Todos />}/>
    <Route path='/removelist' element={<RemoveList />}/>
  </Routes>
  </>
  </div>
  )
}