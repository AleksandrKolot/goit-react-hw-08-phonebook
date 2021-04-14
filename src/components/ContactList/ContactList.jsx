import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/operations';
import { getContactList } from '../../redux/selectors';

import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactList);

  useEffect(() => {
    dispatch(fetchContacts());
    //eslint-disable-next-line
  }, []);

  return (
    <table className={s.table}>
      <tbody>
        {contacts.map(({ name, number, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => dispatch(deleteContact(id))}>
                del
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
