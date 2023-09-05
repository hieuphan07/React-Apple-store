import { createStore } from 'redux';

const SHOW_INFO = 'SHOW_INFO';
const HIDE_INFO = 'HIDE_INFO';
const TYPE_SELECT = 'TYPE_SELECT';
const PRODUCT_SELECT = 'PRODUCT_SELECT';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_CART = 'ADD_CART';
const UPDATE_CART = 'UPDATE_CART';
const DELETE_CART = 'DELETE_CART';

const initialState = {
  showInfo: false,
  type: 'All',
  products: [],
  user: JSON.parse(localStorage.getItem('LOGINED_USER')) || null
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
    case LOGIN:
      localStorage.setItem('LOGINED_USER', JSON.stringify(action.user))
      return { ...state, user: JSON.parse(localStorage.getItem('LOGINED_USER')) }
    case LOGOUT:
      localStorage.removeItem('LOGINED_USER')
      return { ...state, user: null }
    case ADD_CART:
      return
    case UPDATE_CART:
      return
    case DELETE_CART:
      return
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;