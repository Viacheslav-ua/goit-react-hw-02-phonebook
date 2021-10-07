import React from "react";
import S from "./ContactList.module.css";
type listType = {
  id: string;
  name?: string;
  number?: string;
};

interface PropsType {
  list: listType[];
  deleteContact: any;
}

const ContactList: React.FC<PropsType> = ({ list, deleteContact }) => {
  return (
    <ul className={S.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={S.row}>
          <p className={S.text}>
            {name}: {number}
          </p>
          <button className={S.btn} onClick={() => deleteContact(id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
