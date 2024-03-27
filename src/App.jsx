import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBar from './components/SearchBar/SearchBar';
import { nanoid } from 'nanoid';

const valuesArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [values, setValues] = useState(() => {
    const sevedValues = JSON.parse(window.localStorage.getItem('values'));
    if (sevedValues.length !== 0) {
      return sevedValues;
    }
    return valuesArr;
  });

  const [search, setSearch] = useState('');

  const addContact = data => {
    setValues([
      ...values,
      { id: nanoid(), name: data.name, number: data.number },
    ]);
  };

  const onDeleteContact = id => {
    setValues(prevValues => {
      return prevValues.filter(value => value.id !== id);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('values', JSON.stringify(values));
  }, [values]);

  const searchContact = values.filter(value =>
    value.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBar onChange={setSearch} />
      <ContactList contacts={searchContact} onClick={onDeleteContact} />
    </>
  );
}

export default App;
