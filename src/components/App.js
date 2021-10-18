import React, {useEffect, useState} from "react";
import style from "./App.module.css";
import DataInput from "./dataInput/DataInput";
import Contacts from "./contacts/Contacts";
import Section from "./section/Section";
import Filter from "./filter/Filter";
import Container from "./container/Container";

const App = () => {

    const [contacts, setContacts] = useState(() => {
        return JSON.parse(localStorage.getItem('contacts')) ?? [];
    });

    // const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    // const isContactExist = (name) => contacts.some(item => item.name.toLowerCase() === name.toLowerCase());

    // const filterInputHandler = () => contacts.filter(item =>
    //     item.name.toLowerCase().includes(filter.toLowerCase()));

    // const filterValue = (e) => setFilter(e.target.value);

    // const addUser = (user) => {
    //     setContacts(prev => {
    //         return [...prev, user];
    //     })
    // };

    // const removeUser = (id) => {
    //     setContacts(prev => [...prev.filter(contact => contact.id !== id)])
    // };

    return (

        <div className={style.app}>
            <Container>
                <Section title="Phonebook">
                    <DataInput
                        // isContactExist={isContactExist}
                    />
                </Section>
                <Section title="Contacts">
                    <Filter />
                    <Contacts
                        contacts={contacts}
                        // removeUser={removeUser}
                    />
                </Section>
            </Container>
        </div>
    );
}

export default App;
