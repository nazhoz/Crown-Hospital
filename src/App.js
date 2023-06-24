import React from 'react';
import "./components/nav/Nav.css"
import"./components/nav//Home.css"

import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/nav/main/Home';
import Finddoctors from './components/nav/doctor/Finddoctors';
import Labtests from './components/nav/labs/Labtests';
import Videoconuslt from './components/nav/videoconsult/Videoconuslt';
import Medicines from './components/nav/medi/Medicines';
import Surguries from './components/nav/surgu/Surguries';



function App() {
  
  return ( 
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='Finddoctors' element={<Finddoctors/>}/>
      <Route path='Labtests' element={<Labtests/>}/>
      <Route path='Videoconsults' element={<Videoconuslt/>}/>
      <Route path='Medicines' element={<Medicines/>}/>
      <Route path='Surguries' element={<Surguries/>}/>
 

    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
