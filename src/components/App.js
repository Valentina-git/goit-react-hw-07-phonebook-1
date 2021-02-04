import React from 'react';
import AppWrapper from './AppStyled';
import { CSSTransition } from 'react-transition-group';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, isLoading } from '../redux/selectors/phonebookSelectors';

const App = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(isLoading);

  return (
    <AppWrapper>
      {loading && (
        <div className="loader-wrapper">
          <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} timeout={3000} />
        </div>
      )}
      <CSSTransition in={true} appear={true} timeout={500} classNames="my-title" unmountOnExit>
        <h1 className="page-title">Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <h2 className="contacts-title">Contacts</h2>
      <CSSTransition in={contacts.length > 1} timeout={250} classNames="my-filter" unmountOnExit>
        <Filter />
      </CSSTransition>

      <ContactList />
    </AppWrapper>
  );
};

export default App;
