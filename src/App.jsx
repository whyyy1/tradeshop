import React from 'react';
import AppNav from './Navigation/AppNav';
import AuthContextProvider from './Authorize/AuthContext';


function App() {
  
 
  return (
      <div className='bg-sa font-semibold flex flex-col h-screen justify-between '>
      <AppNav />
      <footer className='bg-slate-300 bottom-0 text-center'>FOOTER</footer>
      </div>
      
    
  );
}

export default App;
