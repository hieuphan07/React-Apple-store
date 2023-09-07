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
const ORDER = 'ORDER';

const initialState = {
  showInfo: false,
  category: 'All',
  products: [],
  user: JSON.parse(localStorage.getItem('LOGINED_USER')) || null,
  cartItems: [],
  orderItems: [],
  total: 0,
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

        return { ...state, cartItems: updatedCartItems, total: updatedTotal };
      } else {
        const amount = inputQuantity * addedItem.price;
        updatedCartItems = [...state.cartItems, { ...addedItem, quantity: inputQuantity, amount: amount }];
        updatedTotal = updatedCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

        return { ...state, cartItems: updatedCartItems, total: updatedTotal }
      }
    case UPDATE_CART:
      const changeQuantity = action.changeQuantity;
      const inputUpdatingItem = action.cartItem;

      const updatingItemIndex = state.cartItems.findIndex(curr => curr._id.$oid === inputUpdatingItem._id.$oid);
      const updatingItem = state.cartItems[updatingItemIndex];

      let updatingCartItems;
      let updatingTotal;

      if (changeQuantity === 'ADD') {
        const updatingQuantity = Number(updatingItem.quantity) + 1;
        const updatingAmount = updatingQuantity * updatingItem.price;
        const updatingExistingItem = { ...updatingItem, quantity: updatingQuantity, amount: updatingAmount };
        updatingCartItems = [...state.cartItems];
        updatingCartItems[updatingItemIndex] = updatingExistingItem;
        updatingTotal = updatingCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

        return { ...state, cartItems: updatingCartItems, total: updatingTotal };
      } else {
        const updatingQuantity = Number(updatingItem.quantity) - 1;
        if (updatingQuantity > 0) {
          const updatingAmount = updatingQuantity * updatingItem.price;
          const updatingExistingItem = { ...updatingItem, quantity: updatingQuantity, amount: updatingAmount };
          updatingCartItems = [...state.cartItems];
          updatingCartItems[updatingItemIndex] = updatingExistingItem;
          updatingTotal = updatingCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

          return { ...state, cartItems: updatingCartItems, total: updatingTotal };
        } else {
          updatingCartItems = [...state.cartItems];
          updatingCartItems.splice(updatingItemIndex, 1);
          updatingTotal = updatingCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

          return { ...state, cartItems: updatingCartItems, total: updatingTotal };
        }
      }
    case DELETE_CART:
      const inputRemovingItem = action.cartItem;
      const removingItemIndex = state.cartItems.findIndex(curr => curr._id.$oid === inputRemovingItem._id.$oid);
      let removingCartItems = [...state.cartItems];

      removingCartItems.splice(removingItemIndex, 1);

      const removingTotal = removingCartItems.reduce((total, curr) => total + Number(curr.amount), 0);

      return { ...state, cartItems: removingCartItems, total: removingTotal };
    case ORDER:
      return { ...state, orderItems: action.orders }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;