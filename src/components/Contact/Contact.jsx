import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/thunkOptions';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(id));

  return (
    <div className={css.contactItem}>
      <div className={css.nameAndNumber}>
        <p>
          <IconContext.Provider value={{ color: '#1c1c84' }}>
            <IoMdPerson className={css.icon} /> {name}
          </IconContext.Provider>
        </p>
        <p>
          <IconContext.Provider value={{ color: '#1c1c84' }}>
            <FaPhoneAlt className={css.icon} /> {number}
          </IconContext.Provider>
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
