import css from './Contact.module.css';
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";

const Contact = ({ contact, onClick }) => {
  return (
    <>
      <div>
        <p className={css.contactData}><BsPersonFill className={css.icon}/>{contact.name}</p>
        <p className={css.contactData}><BsFillTelephoneFill className={css.icon}/>{contact.number}</p>
      </div>

      <button className={css.btnDelete} type="click" onClick={()=>onClick(contact.id)}>Delete</button>
    </>
  );
};
export default Contact;
