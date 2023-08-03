import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useAuthContext } from '../../Authorize/AuthContext';
import { useParams,useNavigate } from 'react-router-dom';

function Register() {
  const params = useParams()
  const navigate = useNavigate()
  const {state,dispatch} = useAuthContext()
  const [userForm, setUserForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    member: '',
    id: uuidv4(),
    
  })


  function handleChange(event) {
    console.log(event.target)

    setUserForm({ ...userForm, [event.target.name]: event.target.value })
  }

  function handleSubmit(e) {

    
    params.user = userForm.id
    let userAtt = '/' + params.user

    console.log(dispatch({ type: 'GET_USER', payload: state }))
    dispatch({ type: 'LOGIN', payload: userForm })
    navigate(userAtt)
    console.log(dispatch({ type: 'GET_USER', payload: state }))

    console.log(userForm)
  }


  return (
    <div className='flex text-center flex-col  bg-yellow-300'>
      <h1 className='text-center text-2xl font-extrabold'>Register</h1>
      <h1 className='text-center text-2xl'>Sign up now and begin collecting!</h1>
      <h1 className='text-center text-2xl text-red-600'>SIGN FORM ONLY USES FIRST AND LAST NAME TO DISPLAY ON PAGE</h1>
      <form className='flex flex-col m-2' onSubmit={handleSubmit}>
        <label>
          First Name:
          <input className='mb-5 text-center border-primary border-2 rounded' type="text" name="firstName" value={userForm.firstName} onChange={handleChange} placeholder='First Name' />
        </label>
        <label>
          Last Name:
          <input className='mb-5 text-center border-primary border-2 rounded' type="text" name="lastName" value={userForm.lastName} onChange={handleChange} placeholder='Last Name' />
        </label>
        <label>
          Email:
          <input className='mb-5 text-center border-primary border-2 rounded' type="text" name="email" value={userForm.email} onChange={handleChange} placeholder='Email' />
        </label>
        <label>
          Password:
          <input className='mb-5 text-center border-primary border-2 rounded' type="text" name="password" value={userForm.password} onChange={handleChange} placeholder='Password' />
        </label>
        {/* <label>
          1:
          <input
            type="radio"
            name="member"
            value="option1" // Set a unique value for option 2
            checked={userForm.member === "option1"} // Check if this option is selected
            onChange={handleChange}
          />
        </label>
        <label>
          2:
          <input
            type="radio"
            name="member"
            value="option2" // Set a unique value for option 2
            checked={userForm.member === "option2"} // Check if this option is selected
            onChange={handleChange}
          />
        </label> */}
        <input className='border-primary border-2 rounded  mt-10' type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Register