import { combineReducers } from "redux"; // get access to the function

/*
Get a reducer with key of authors with value of authorsReducer's return value, and key of books with value of booksReducer's return value.
*/
const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

// reducer ONLY concerned with books
function booksReducer( ** state = [], ** action) { // state isn't all state, just the books array
  let idx;
  switch (action.type) {
  case "ADD_BOOK":
    return [...state, action.book];

  case "REMOVE_BOOK":
    idx = state.findIndex(book => book.id === action.id)
    return [...state.slice(0, idx), ...state.slice(idx + 1)];

  default:
    return state;
  }
}

// reducer ONLY concerned with authors
function authorsReducer( ** state = [], ** action) { // same as above, but with authors
  let idx;
  switch (action.type) {
  case "ADD_AUTHOR":
    return [...state, action.author];

  case "REMOVE_AUTHOR":
    idx = state.findIndex(author => author.id === action.id)
    return [...state.slice(0, idx), ...state.slice(idx + 1)];

  default:
    return state;
  }
}
