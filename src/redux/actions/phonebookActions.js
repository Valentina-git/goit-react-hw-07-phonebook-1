import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('phonebook/addRequest');
export const addContactSuccess = createAction('phonebook/addSuccess');
export const addContactError = createAction('phonebook/addError');

export const deleteContactRequest = createAction('phonebook/deleteRequest');
export const deleteContactSuccess = createAction('phonebook/deleteSuccess');
export const deleteContactError = createAction('phonebook/deleteError');

export const getContactsRequest = createAction('phonebook/getRequest');
export const getContactsSuccess = createAction('phonebook/getSuccess');
export const getContactsError = createAction('phonebook/getError');

export const setFilter = createAction('phonebook/setFilter');
