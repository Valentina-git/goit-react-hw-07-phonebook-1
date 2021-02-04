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

const onAddContact = (state, { payload }) => [...state, payload];
const onDeleteContact = (state, { payload }) => [...state.filter(item => item.id !== payload)];
const onSetFilter = (_, { payload }) => payload;
const onGetInitialContacts = (_, { payload }) => [...payload];

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
const errorReducer = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [getContactsError]: (_, { payload }) => payload,
});

const phonebookReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loader: loaderReducer,
  error: errorReducer,
});

export default phonebookReducer;
