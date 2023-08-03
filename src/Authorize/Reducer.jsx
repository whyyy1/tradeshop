
export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log(state, action)
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      return {
        ...state, isLoggedIn: false, user: null, cards: {
          'Pokemon': [],
          'Magic': [],
          'favoritesPF': [],
          'favoritesMF': [],
        }
      };
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } };

    case 'GET_USER':
      console.log(action.payload.user)
      return state;
    case 'addToPokemonCollection':
      console.log(state.cards.Pokemon)
      if (action.payload !== null && typeof action.payload !== 'undefined') {
        return {
          ...state,
          cards: {
            ...state.cards,
            Pokemon: [...state.cards.Pokemon, action.payload],
          },
        };
      }
    case 'addToMagicCollection':
      console.log(state.cards)
      if (action.payload !== null && typeof action.payload !== 'undefined') {
        return {
          ...state,
          cards: {
            ...state.cards,
            Magic: [...state.cards.Magic, action.payload],
          },
        };
      }
    case 'addToFavorite':
      
      action.payload.favorite = !action.payload.favorite
      
      console.log(action.payload)
      return state
      // if (action.payload !== null && typeof action.payload !== 'undefined') {
      //   return {
      //     ...state,
      //     cards: {
      //       ...state.cards,
      //       favoritesPF: [...state.cards.favoritesPF, action.payload],
      //     },
      //   };
      // }
    
    default:
      return state;


  }
};