import React from "react";
import S from "./ContactForm.module.css";

interface PropsType {
  handleAddContact: any;
  handleAddName: any;
  handleAddNumber: any;
}

const ContactForm: React.FC<PropsType> = ({
  handleAddName,
  handleAddContact,
  handleAddNumber,
}) => {
  return (
    <div className={S.contactsForm}>
      <label className={S.caption}>Name</label>

      <input
        type="text"
        name="name"
        className={S.input}
        onInput={handleAddName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <label className={S.caption}>Number</label>
      <input
        type="tel"
        name="number"
        onInput={handleAddNumber}
        className={S.input}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
      />

      <button type="button" className={S.btn} onClick={handleAddContact}>
        Add contact
      </button>
    </div>
  );
};
export default ContactForm;
