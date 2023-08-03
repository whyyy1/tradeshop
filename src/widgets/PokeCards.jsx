import React, { useEffect, useState } from 'react';
import pokemon from 'pokemontcgsdk';
import config from '../Authorize/config';
import { useAuthContext } from '../Authorize/AuthContext';


function PokeCards() {
  const [cardSet, setCardSets] = useState([]);
  const [packList, setPackList] = useState({});
  const [cardPack, setCardPack] = useState({});
  const [cardsOpened, setCardsOpened] = useState([]);
  const [packPicked, setPackPicked] = useState(false);
  const { state, dispatch } = useAuthContext()

  async function getDataInfo() {
    let pl = []
    pokemon.configure({ apiKey: config.api.pokemon });
    pokemon.set.all().then((sets) => {
      sets.map((cardS) => {
        pl.push(cardS.name)
        let obj = {
          name: cardS.name,
          id: cardS.id,
          logo: cardS.images.logo,
          setTotal: cardS.total,
          printedTotal: cardS.printedTotal,
        };

        setCardSets((prevCard) => {
          const newCardSets = [...prevCard, obj];
          return newCardSets;
        });

      });
    });

    setPackList(prevList => pl)
    console.log(packList)
  }

  async function getPack(min, max) {
    console.log(packPicked)
    if (cardSet.length > 0) {
      let num = Math.floor(Math.random() * (max - min) + min);
      console.log(num)
      setCardPack(cardSet[num]);
      // setPackPicked(prevShow => !prevShow)
    } else {
      alert('No packs available.');
    }

  }

  async function recurse() {

    if (!packPicked) {
      setPackPicked(prevShow => !prevShow)
    }
    if (cardsOpened.length >= 7) {
      alert('Last Card!');
    }
    if (cardsOpened.length < 8) {
      getCards(cardPack);


    } else {
      alert('click add to collection to proceed')
    }

  }

  async function getCards(obj) {
    if (cardsOpened.length > 8) {
      alert('Opened all cards. Add to collection')
    }

    let ranNum = Math.floor(Math.random() * obj.printedTotal + 1);
    let cardEndPoint = obj.id + '-' + ranNum;

    try {
      await pokemon.card.find(cardEndPoint).then((card) => {
        if (card) {
          setCardsOpened((cards) => [...cards, card]);
        }
      });

    } catch (e) {
      console.log(e);

      alert('pick another pack')
      setPackPicked(prevShow => !prevShow)
    }


  }

  useEffect(() => {
    getDataInfo();
  }, []);

  return (
    <div className='max-h-max text-center container flex  flex-col text-2xl bg-neutral-700 font-semibold '>
      <div className='bg-white mx-auto rounded p-5 '>
      <h1>Instructions are simple. The 3 buttons are for different eras of pokemon packs.</h1>
      <h1>Select a pack then proceed to open pack by grabing a card</h1>
      <h1>8 cards in each pack all random from that set</h1>
      <h1>Click add to collection to add to collection</h1>
      </div>
      <div className='flex flex-col bg-red-500 rounded md:flex-row'>
        <img className='mx-auto scale-50'
          onClick={() => recurse()}
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo-500x313.png"
          alt="Pokemon Logo"
        />
        {cardPack.logo?<img className='mx-auto scale-50' src={cardPack.logo} alt="Pack Logo" />:<></>}
        
      </div>
      {packPicked ? <>

      </> : <div className='flex flex-wrap justify-evenly '>
        <h1 className='w-64 rounded-lg bg-yellow-500 hover:cursor-pointer text-center m-14 font-extrabold' onClick={() => getPack(0, 50)}>Beginning Sets</h1>
        <h1 className='w-64 rounded-lg bg-yellow-500 hover:cursor-pointer text-center m-14 font-extrabold' onClick={() => getPack(51, 101)}>Middle Sets</h1>
        <h1 className='w-64 rounded-lg bg-yellow-500 hover:cursor-pointer text-center m-14 font-extrabold' onClick={() => getPack(101, cardSet.length)}>Latest Sets</h1>

      </div>}

      <h1 className='mx-auto bg-white rounded'>Total cards: {cardsOpened.length}/ 8</h1>
      {cardsOpened.length >= 8 ?
            <button className='w-100 mb-2 rounded-lg bg-yellow-500 hover:cursor-pointer text-center m-14 font-extrabold' onClick={() => {
              cardPack['cards'] = cardsOpened


              dispatch({ type: 'addToPokemonCollection', payload: cardPack })
              setCardsOpened([])
              setCardPack([])
              setPackPicked(prevPick => false)
            }
            }>
              Add to Collection
            </button> : <button className='w-52 mb-2 rounded-lg bg-yellow-500 hover:cursor-pointer text-center m- font-extrabold' onClick={() => recurse()} >Grab Card</button>}



      {cardPack.logo ? (
        <div
          className='flex flex-col '>
            <div className='flex flex-row flex-wrap bg-slate-400 rounded'>
        {cardsOpened.map((card, index) => (

          <img className='w-32 z-0 scale-95 m-4 text-center transform hover:scale-150 hover:z-10 ' key={index} src={card.images.small} alt={`Card ${index + 1}`} />

        ))}
      </div>
          


        </div>

      ) : (
        <></>
      )}
      






    </div>
  );
}

export default PokeCards;
