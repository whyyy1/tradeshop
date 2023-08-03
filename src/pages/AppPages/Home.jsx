import React, { useEffect } from 'react'

function Home({ data }) {
  console.log(data)

  useEffect(() => {

  }, [data])
  return (
    <div className='flex text-center flex-col m-10 p-10'>
      <h1 className='text-7xl mb-10 text-red-600 '>FAKE PRODUCT NOT REAL</h1>
      <div className='flex flex-wrap flex-col '>
        <h1 className='text-5xl mb-24' >{data.user.firstName} {data.user.lastName}'s Home Page</h1>
        
        <h1 className='text-xl mb-10'>This is your personal binder for all stored cards!</h1>
        <h1 className='text-2xl mb-10'>Total Pokemon packs opened: <strong>{data.cards.Pokemon.length}</strong></h1>
        <h1 className='text-2xl mb-10'>Total Magic packs opened: <strong>{data.cards.Magic.length}</strong></h1>
      </div>

      <h1 className='text-7xl mt-10 text-red-600'>FAKE PRODUCT NOT REAL</h1>
    </div>
  )
}

export default Home