import s from './App.module.css';
import { useSelector } from 'react-redux';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import { getContactsError, getContactsLoading } from '../../redux/selectors';

function App() {
  const error = useSelector(state => getContactsError(state));
  const isLoading = useSelector(state => getContactsLoading(state));
  return (
    <div className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <p className={s.find}>Find contacts by name</p>
      <Filter />
      {isLoading && <p>{' Loading... '}</p>}
      {error && <p>{' Sorry, something goes wrong: ' + error}</p>}
      <ContactList />
    </div>
  );
}

export default App;
