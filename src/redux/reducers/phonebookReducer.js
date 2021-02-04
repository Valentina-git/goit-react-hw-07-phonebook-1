import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContact,
  deleteContactSuccess,
  getInitialContacts,
  setFilter,
} from '../actions/phonebookActions';

const initialState = {
  contacts: [],
  filter: '',
};

const onAddContact = (state, action) => [...state, action.payload];
const onDeleteContact = (state, action) => [...state.filter(item => item.id !== action.payload)];
const onSetFilter = (state, action) => action.payload;
const onGetInitialContacts = (state, action) => [...action.payload];

const contactsReducer = createReducer([], {
  [addContactSuccess]: onAddContact,
  [deleteContactSuccess]: onDeleteContact,
  [getInitialContacts]: onGetInitialContacts,
});
const filterReducer = createReducer('', {
  [setFilter]: onSetFilter,
});

const loaderReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader: loaderReducer,
});

export default phonebookReducer;
