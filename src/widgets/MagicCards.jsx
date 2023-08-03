import React, { useEffect, useState } from 'react'
import axios from 'axios'
import boosterSets from './boosterSets'
import { useAuthContext } from '../Authorize/AuthContext'


function MagicCards() {
    const [sets, setSets] = useState([])
    const [choosenPack, setChoosenPack] = useState(null)
    const [showCards, setShowCards] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const { state, dispatch } = useAuthContext()

    async function getData() {
        let codes = []
        const mtg = await axios.get('https://api.magicthegathering.io/v1/sets')

        boosterSets.map((name) => {
            mtg.data.sets.filter((set) => {
                if (set.name === name) {
                    codes.push(set.code)
                }
            })

        })

        setSets((prevSets) => prevSets = codes)
    }

    async function cardPack() {
        setIsLoading(prevC => !prevC)
        try {
            let ranNum = Math.floor(Math.random() * sets.length - 1)
            let pack = sets[ranNum].toLowerCase()
            let packAddress = await axios.get(`https://api.magicthegathering.io/v1/sets/${pack}`)

            let boosterAddress = await axios.get(`https://api.magicthegathering.io/v1/sets/${pack}/booster`)

            let packMade = {
                'name': packAddress.data.set.name,
                'type': packAddress.data.set.type,
                'cards': boosterAddress.data.cards
            }
            setChoosenPack(prevPack => packMade)
            setShowCards(prevShow => !prevShow);
            alert('Got your pack!')
        } catch (e) {
            alert('Get another pack')
        }
        setIsLoading(prevC => !prevC)
    }


    useEffect(() => {
        getData()

    }, [])
    return (
        <div className='flex flex-col text-center text-2xl bg-black h-max'>
            <div className='bg-violet-300 mx-auto rounded p-4'>
            <h1 >Instructions are simple. Click the random pack button</h1>
            <h1>Recieve your random pack and wait for it to load</h1>
            <h1>Cards vary based on the pack</h1>
            <h1>Click add to collection to add to collection</h1>
            </div>
            <img className='mx-auto' src={'data:image/jpeg;base64,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'} />
            <h1>Total cards: {choosenPack === null ? <>{0}</> : <>{choosenPack.cards.length}</>}</h1>
            {showCards ? <></> : <h1 className='rounded-lg bg-yellow-500 hover:cursor-pointer text-center m-14 font-extrabold' onClick={() => {
                cardPack()

            }}>Get Random Pack</h1>}
            {isLoading ? <div role="status">
                <svg aria-hidden="true" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div> : <></>}

            {showCards ? <button className='m-5 bg-yellow-500 align-middle rounded-lg' onClick={() => {

                dispatch({ type: 'addToMagicCollection', payload: choosenPack });
                setShowCards(prevShow => !prevShow);
                setChoosenPack(null)
            }}>Add to Collection</button> :<></>}
            <div className='flex flex-wrap justify-between m-5 mx-auto bg-slate-100'>

                {showCards ? choosenPack.cards.map((card) => {

                    return (<img onClick={(e) => console.log(card)} className=' w-40 text-center  hover:scale-150 rounded-lg m-2' key={card.name} src={card.imageUrl} />)
                }) : <></>}

            </div>
        </div>
    )
}

export default MagicCards