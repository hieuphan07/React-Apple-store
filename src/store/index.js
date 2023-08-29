import { createStore } from 'redux';

const SHOW_INFO = 'SHOW_INFO';
const HIDE_INFO = 'HIDE_INFO';
const TYPE_SELECT = 'TYPE_SELECT';

const initialState = {
  showInfo: false,
  type: 'All',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_INFO:
      return { ...state, showInfo: true, detail: action.payload }
    case HIDE_INFO:
      return { ...state, showInfo: false, detail: action.payload }
    case TYPE_SELECT:
      return { ...state, type: action.selectedType }
    default:
      return state
  }
}

const store = createStore(reducer);

export default store;