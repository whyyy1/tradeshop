import React from 'react'
import axios from 'axios'



function YugiohCards() {
    async function getData(){
        console.log(await axios.get('https://cors-anywhere.herokuapp.com/https://db.ygoprodeck.com/api/v7/'))
    }
  return (
    <div>YugiohCards
        <button onClick={()=> getData()}>Click me </button>
    </div>
  )
}

export default YugiohCards