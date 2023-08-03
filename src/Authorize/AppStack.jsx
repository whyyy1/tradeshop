import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppNavBar from '../Navigation/AppNavBar';
import Home from '../pages/AppPages/Home';
import Profile from '../pages/AppPages/Profile';
import Activity from '../pages/AppPages/Activity';
import { useAuthContext } from './AuthContext';
import Collection from '../pages/AppPages/Collection';
import PokePage from '../pages/AppPages/PokePage';
import MagicPage from '../pages/AppPages/MagicPage';
// import YugiohPage from '../pages/AppPages/YugiohPage';

function AppStack() {
  const { state, dispatch } = useAuthContext();
  const { id: userId } = state.user; // Destructure the userId from the state.user object

  let data = state

  // Remove the useEffect hook, it's not necessary in this case

  return (
    <>
      
      <AppNavBar userId={userId} className='bg-slate-500' /> {/* Pass the userId to AppNavBar */}
      <Routes>
        {/* Remove the string concatenation, and use parameter syntax */}
        <Route path="/:userId" element={<Home data={data} />} />
        <Route path="/profile/:userId" element={<Profile data={data} />} />
        <Route path="/activity/:userId" element={<Activity data={data} />} />
        <Route path="/collection/:userId" element={<Collection data={data} />} />
        <Route path="/pokemoncards/:userId" element={<PokePage data={data} />} />
        <Route path="/magiccards/:userId" element={<MagicPage data={data} />} />
        {/* <Route path="/yugiohcards/:userId" element={<YugiohPage data={data} />} /> */}
      </Routes>
      
    </>
  );
}

export default AppStack;
