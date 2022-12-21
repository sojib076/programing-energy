import React from 'react';
import { RouterProvider } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import './App.css'

import { sojib } from './Components/Route/Allpaths';


const App = () => {
   const route = sojib
  return (
    <div className='App'>
      <RouterProvider router={route}> </RouterProvider>
      <Toaster/>
    </div>
  );
};

export default App;