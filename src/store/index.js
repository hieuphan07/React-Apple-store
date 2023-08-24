import { createStore } from 'redux';

const SHOW_INFO = 'SHOW_INFO';
const HIDE_INFO = 'HIDE_INFO';

const initialState = {
  showInfo: false,
  dataAPI: 'https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74'
}

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, showInfo: true, detail: action.payload }
    case HIDE_INFO:
      return { ...state, showInfo: false, detail: action.payload }
    default:
      return state
  }
}

const store = createStore(popupReducer);

export default store;