export const getContacts = state => state.phonebook.contacts;
export const getFilteredContacts = state =>
  state.phonebook.contacts.filter(item => item.name.toLowerCase().includes(state.phonebook.filter.toLowerCase()));
export const getFilter = state => state.phonebook.filter;
export const isLoading = state => state.phonebook.loader;
