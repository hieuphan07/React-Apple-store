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
  category: 'All',
  products: [],
  user: JSON.parse(localStorage.getItem('LOGINED_USER')) || null,
  cartItems: [],
  total: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return {
        ...state,
        showInfo: true,
        detail: action.payload
      }
    case HIDE_INFO:
      return {
        ...state,
        showInfo: false,
        detail: action.payload
      }
    case TYPE_SELECT:
      return {
        ...state,
        category: action.selectedType
      }
    case PRODUCT_SELECT:
      return {
        ...state,
        products: action.selectedProds
      }
    case LOGIN:
      localStorage.setItem('LOGINED_USER', JSON.stringify(action.user))
      return {
        ...state,
        user: JSON.parse(localStorage.getItem('LOGINED_USER'))
      }
    case LOGOUT:
      localStorage.removeItem('LOGINED_USER')
      return {
        ...state,
        user: null
      }
    case ADD_CART:
      const addedItem = action.cartItem;
      const inputQuantity = action.quantity;

      const existingItemIndex = state.cartItems.findIndex(curr => curr._id.$oid === addedItem._id.$oid);
      const existingItem = state.cartItems[existingItemIndex];

      let updatedCartItems;
      let updatedTotal;

      if (existingItem) {
        const updatedQuantity = Number(existingItem.quantity) + Number(inputQuantity);
        const updatedAmount = updatedQuantity * existingItem.price;
        const updatedExistingItem = { ...existingItem, quantity: updatedQuantity, amount: updatedAmount };
        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = updatedExistingItem;
        updatedTotal = updatedCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

        return { ...state, artItems: updatedCartItems, total: updatedTotal };
      } else {
        const amount = inputQuantity * addedItem.price;
        updatedCartItems = [...state.cartItems, { ...addedItem, quantity: inputQuantity, amount: amount }];
        updatedTotal = updatedCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

        return { ...state, cartItems: updatedCartItems, total: updatedTotal }
      }
    case UPDATE_CART:
      return state
    case DELETE_CART:
      return state
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;