import { createStore } from 'redux';

const SHOW_INFO = 'SHOW_INFO';
const HIDE_INFO = 'HIDE_INFO';
const TYPE_SELECT = 'TYPE_SELECT';
const PRODUCT_SELECT = 'PRODUCT_SELECT';

const initialState = {
  showInfo: false,
  type: 'All',
  products: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, showInfo: true, detail: action.payload }
    case HIDE_INFO:
      return { ...state, showInfo: false, detail: action.payload }
    case TYPE_SELECT:
      return { ...state, type: action.selectedType }
    case PRODUCT_SELECT:
      return { ...state, products: action.selectedProds }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;