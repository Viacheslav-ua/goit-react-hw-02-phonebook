import React, { Component } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import S from "./App.module.css";
type contactsType = {
  id: string;
  name?: string;
  number?: string;
};

interface StateType {
  contacts: contactsType[];
  filter?: string;
  name?: string;
  number?: string;
}

class App extends Component {
  state: StateType = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  handleAddContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("ggg");
  };

  handleAddName = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log("fff");
  };

  handleAddNumber = (e: React.MouseEvent<HTMLInputElement>) => {
    console.log("fff");
  };

  deleteContact = (id: string): void => {
    this.setState((prevState: StateType) => ({
      contacts: prevState.contacts.filter((item) => item.id !== id),
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          handleAddContact={this.handleAddContact}
          handleAddName={this.handleAddName}
          handleAddNumber={this.handleAddNumber}
        />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList
          list={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
