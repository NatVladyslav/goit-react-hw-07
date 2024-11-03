import css from './Contact.module.css';
import { IoMdPerson } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/thunkOptions';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(removeContact(id));

  return (
    <div className={css.contactItem}>
      <div className={css.nameAndNumber}>
        <p>
          <IoMdPerson className={css.icon} /> {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} /> {number}
        </p>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
