import { createSelector } from '@reduxjs/toolkit';
export const getContacts = state => state.phonebook.contacts;
export const getFilter = state => state.phonebook.filter;

export const getFilteredContacts = createSelector([getContacts, getFilter], (contacts, filter) => {
  return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
});

export const isLoading = state => state.phonebook.loader;
