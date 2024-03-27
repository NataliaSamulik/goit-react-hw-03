import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={css.listItem}>
          <Contact contact={contact} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
