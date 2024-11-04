import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps.js';
import { validationSchema } from '../../utility/formUtil';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFormId = nanoid();
  const numberFormId = nanoid();

  const handleSubmit = (value, actions) => {
    dispatch(addContact({ ...value, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formikForm}>
        <label htmlFor={nameFormId}>Name</label>
        <Field
          className={css.input}
          type="text"
          name="name"
          id={nameFormId}
          placeholder="Tom Ford"
        />
        <ErrorMessage
          className={css.errorMessage}
          name="name"
          component="span"
        />
        <label htmlFor={numberFormId}>Number</label>
        <Field
          className={css.input}
          type="tel"
          name="number"
          id={numberFormId}
          placeholder="380 XX XXX XX XX "
        />
        <ErrorMessage
          className={css.errorMessage}
          name="number"
          component="span"
        />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
