import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/phonebookActions';

export const operationAddContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/contacts.json`, contact);
    dispatch(addContactSuccess({ ...contact, id: response.data.name }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};
export const operationDeleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/contacts/${id}.json`);
    console.log('response', response);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
