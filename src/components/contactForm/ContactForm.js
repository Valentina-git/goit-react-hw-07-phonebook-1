import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import FormWrapper from './ContactFormStyled';
import Alert from '../alert/Alert';
import { getContacts } from '../../redux/selectors/phonebookSelectors';
import { operationAddContact } from '../../redux/operations/phonebookOperations';
const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name: state.name, number: state.number };
    if (contacts.some(element => element.name === user.name)) {
      showAlertMessage(`${user.name} is already in contacts`);
      return;
    }
    if (!user.name.length) {
      showAlertMessage('Please enter a name');
      return;
    }
    if (!user.number.length) {
      showAlertMessage('Please enter a number');
      return;
    }
    // dispatch(addNewContact(user));
    dispatch(operationAddContact(user));
    setState({ ...initialState });
  };
  const showAlertMessage = message => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
    setTimeout(() => {
      setAlertMessage('');
    }, 3250);
  };
  const { name, number } = state;
  return (
    <FormWrapper>
      <CSSTransition in={showAlert} timeout={250} classNames="my-alert" unmountOnExit>
        <Alert message={alertMessage} />
      </CSSTransition>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Name
          <input className="form-input" type="text" name="name" value={name} onChange={handleInputChange} />
        </label>
        <label className="form-label">
          Number
          <input className="form-input" type="text" name="number" value={number} onChange={handleInputChange} />
        </label>
        <button className="form-button" type="submit">
          Add contact
        </button>
      </form>
    </FormWrapper>
  );
};

export default ContactForm;

// ContactForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
// };
