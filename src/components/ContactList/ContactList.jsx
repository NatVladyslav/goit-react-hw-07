import css from './ContactList.module.css';

import Contact from '../Contact/Contact';
import Message from '../Message/Message';

import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/selectors.js';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!contacts.length) return <Message title={'No contacts yet'} />;

  if (!filteredContacts.length)
    return <Message title={'Contacts are not found'} />;
  return (
    <>
      <h2 className={css.title}>Contacts list</h2>
      <div className={css.contactList}>
        {filteredContacts.map(item => {
          return (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
