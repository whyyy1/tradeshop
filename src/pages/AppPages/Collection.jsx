import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../Authorize/AuthContext'
import Example from '../../widgets/PopUp'
import ReactModal from 'react-modal';
import { HeartIcon as hS } from '@heroicons/react/24/solid'
import { HeartIcon as hO } from '@heroicons/react/24/outline'
import ScrollTop from '../../widgets/ScrollTop';

function Collection() {
    ReactModal.setAppElement('#root');
    let listOptions = ['Collection', 'Pokemon', 'Magic']
    const { state, dispatch } = useAuthContext()
    const [isOpen, setIsOpen] = useState(false);

    const [cards, setCards] = useState([])
    const [cardClicked, setCardClicked] = useState(null)
    const [favsList, setFavList] = useState([])
    
    const [currentC, setCurrentC] = useState('')

    function getCardCollection(value) {
        setCurrentC(prevC => value)
        setCards([])
        if (value === 'Collection') {
            console.log('hey')
        } else {
            console.log(state.cards[value])
            state.cards[value].map((pack) => {

                pack.cards.map((card) => {

                    let displayCard = {}
                    if (value === 'Pokemon') {
                        displayCard['name'] = card.name
                        displayCard['image'] = card.images.small
                        displayCard['data'] = card
                        

                    }
                    if (value === 'Magic') {
                        displayCard['name'] = card.name
                        displayCard['image'] = card.imageUrl
                        displayCard['data'] = card
                        
                    }
                    // if (value === 'Yugioh') {
                    //     displayCard['name'] = 'hey'
                    //     displayCard['image'] = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6HTyPCOFNV42_piDLfLPHbC8WPQiByyG92xsx3ArSg&s'
                    //     displayCard['data'] = 'card'
                    // }

                    setCards(prevCards => [...prevCards, displayCard])
                })
            })
            console.log(cards)

        }

    }

    function favCard(card) {
        dispatch({ type: 'addToFavorite', payload: cardClicked })
        
    }
    
    useEffect(() => {
        // console.log(cards)
    }, [state])
    return (
        <div className=' flex flex-wrap flex-col bg-blue-300'>

            <select className='text-center mt-4 mb-8 mx-auto  ' onChange={(e) => getCardCollection(e.target.value)}>
                {listOptions.map((list) => {

                    return (<option value={list}>{list}</option>)

                })}
            </select>
            <div className='flex flex-row flex-wrap pl-10  bg-slate-50 rounded text-center'>
                {cards.length > 0 ? cards.map((card) => {

                    return (
                        currentC === 'Pokemon' ?
                            <div className='group ' >
                                <img onClick={() => {
                                    setIsOpen(true)
                                    setCardClicked(prevCard => card)
                                }} className='group w-40 cursor-pointer transform hover:scale-150 z-40' src={card.image} />
                                <div className='group p-5 flex mt-15 relative mx-auto left-0'>
                                    <p className='rounded w-80  hidden absolute group-hover:inline-block duration-100 left-0  mb-0 text-center bg-yellow-500 text-black font-semibold z-40'>Name: <strong> {card.data.name}</strong> </p>
                                    {card.data.supertype !== 'Energy' ?
                                        card.data.rules ? <p className='rounded w-80  hidden absolute group-hover:inline-block duration-100 left-0 top-10  mb-0 text-center bg-yellow-500 text-black font-semibold z-40' >Card Text: {card.data.rules[0]}</p> : <p className='w-80 opacity-0 group-hover:opacity-100 duration-100 absolute inset-x-72 top-1/2   justify-center items-end text-l bg-yellow-500  text-black font-semibold z-50' > Text: {card.data.originalText || card.data.attacks[0].name}</p> :
                                        <></>}

                                </div>





                            </div> : <div className='group ' >
                                <div className='group p-5 flex flex-col mt-15  relative '>
                                    <p className='rounded w-80  hidden absolute group-hover:inline-block duration-100 top-32  mb-0 text-center bg-yellow-500 text-black font-semibold z-50'>Name: <strong> {card.data.name}</strong> </p>
                                    <p className='rounded w-80  hidden absolute group-hover:inline-block duration-100 top-40  mb-0 text-center bg-yellow-500 text-black font-semibold z-50' > Text: {card.data.originalText}</p>


                                </div>
                                <img onClick={() => {
                                    setIsOpen(true)
                                    setCardClicked(prevCard => card)
                                }} className='group w-40 cursor-pointer transform hover:scale-150 z-40' src={card.image} />


                                



                            </div>)
                }) : <div className='flex flex-wrap '>
                    <h1 className='text-5xl mb-24 '>Welcome to {state.user.firstName} {state.user.lastName}'s Collection </h1>
                    <h1 className='text-2xl mb-5'>If you are seeing this go to the "Cards" section and open some packs!</h1>
                    <h2 className='text-2xl mb-5'>Click on the options tabs above to select your specific collection</h2>

                </div>}
                <ReactModal className='w-90 absolute z-50 mx-auto top-32  '
                    isOpen={isOpen}
                    contentLabel="Image Zoom"
                    onRequestClose={() => setIsOpen(false)}
                    appElement={document.getElementById('root')}
                >   {cardClicked === null ? <></> :
                    <div className='flex bg-slate-200 rounded p-10'>
                        <img className='scale-100' src={cardClicked.image} />
                        <div className='flex-col p-5'>
                            <h1 className='text-l ml-5 '>Name: {cardClicked.name}</h1>
                            <h1 className='text-l ml-5'>Rarity: {cardClicked.data.rarity}</h1>
                            {/* <button onClick={()=>favCard(cardClicked)}>{cardClicked.favorite ? 'unFavorite' : 'favorite'}</button> */}
                            
                        </div>

                        
                    </div>}


                </ReactModal>
            </div>
            <ScrollTop/>
        </div>
    )
}

export default Collection