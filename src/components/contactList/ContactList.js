import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from './contactListItem/ContactListItem';
import ContactListWrapper from './ContactListStyled';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getInitialContacts } from '../../redux/actions/phonebookActions';
import { getFilter, getFilteredContacts } from '../../redux/selectors/phonebookSelectors';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      dispatch(getInitialContacts(JSON.parse(contacts)));
    }
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <ContactListWrapper>
      <TransitionGroup component="ul" className="list">
        {contacts
          .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
          .map(item => (
            <CSSTransition key={item.id} timeout={250} classNames="my-list-item">
              <ContactListItem item={item} />
            </CSSTransition>
          ))}
      </TransitionGroup>
    </ContactListWrapper>
  );
};

export default ContactList;
ContactListItem.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
