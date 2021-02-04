import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ContactLi from './ContactListItemStyled';
import { getFilter, getFilteredContacts } from '../../../redux/selectors/phonebookSelectors';
import { setFilter } from '../../../redux/actions/phonebookActions';
import { operationDeleteContact } from '../../../redux/operations/phonebookOperations';
const ContactListItem = ({ item }) => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onHandleDelete = e => {
    const id = e.target.dataset.id;
    dispatch(operationDeleteContact(id));

    if (contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())).length < 2) {
      dispatch(setFilter(''));
    }
  };
  return (
    <ContactLi classname="contact-list-item" key={item.id}>
      <span className="contact-list-name">{item.name}: </span>
      <span className="contact-list-number">{item.number}</span>
      <button className="contact-list-button" type="button" onClick={onHandleDelete} data-id={item.id}>
        Delete contact
      </button>
    </ContactLi>
  );
};

export default ContactListItem;
ContactListItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
