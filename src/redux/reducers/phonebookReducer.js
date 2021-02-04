import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  getContactsError,
  getContactsRequest,
  getContactsSuccess,
  setFilter,
} from '../actions/phonebookActions';

const onAddContact = (state, action) => [...state, action.payload];
const onDeleteContact = (state, action) => [...state.filter(item => item.id !== action.payload)];
const onSetFilter = (state, action) => action.payload;
const onGetInitialContacts = (state, action) => [...action.payload];

const contactsReducer = createReducer([], {
  [addContactSuccess]: onAddContact,
  [deleteContactSuccess]: onDeleteContact,
  [getContactsSuccess]: onGetInitialContacts,
});
const filterReducer = createReducer('', {
  [setFilter]: onSetFilter,
});

const loaderReducer = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader: loaderReducer,
});

export default phonebookReducer;
