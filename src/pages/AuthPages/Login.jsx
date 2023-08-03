import React from 'react';
import { useAuthContext } from '../../Authorize/AuthContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Login() {
  const navigate = useNavigate();
  const { state, dispatch } = useAuthContext();

  const handleLogin = () => {
    let user = {
      firstName: 'him',
      lastName: 'himmy',
      email: 'this@that.com',
      password: '123',
      member: 'this',
      id: uuidv4(),
    };

    // Dispatch the LOGIN action with the user object
    dispatch({ type: 'LOGIN', payload: user });

    // After dispatching, navigate to the app home page with the user ID in the URL
    navigate(`/${user.id}`);
  };

  return (
    <div className='flex text-center flex-col text-3xl m-20 h-max bg-yellow-300'>
      <div className='p-4  border-primary border-2 rounded  font-extrabold'>
      <h1 className='text-center text-4xl'>T's Simulated Card Shop</h1>
      <h1 className='text-center text-2xl'>Where Fantasy Meets Reality - Unleash Your Imagination!</h1>
      </div>
      
      <h1 className='text-center text-5xl mb-10 font-bold'>Login</h1>
      
      <div >
        <form className='flex flex-col' onSubmit={handleLogin}>
          <label>Email:</label>
          <input className='mb-5 text-center border-primary border-2 rounded ' type='Email' placeholder='email' />
          <label>Password:</label>
          <input className='mb-5 text-center border-primary border-2 rounded ' type='Password' placeholder='password' />
          <button className='border-primary border-2 rounded  mt-10 mb-5'>Login</button>
        </form>
      </div>

    </div>
  );
}

export default Login;
