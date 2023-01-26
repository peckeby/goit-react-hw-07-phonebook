import { useDispatch, useSelector } from 'react-redux';

import { getContacts, getIsLoading } from '../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Section from './Section/Section';
import SearchBar from './SearchBar/SearchBar';

import { GlobalStyle } from './GlobalStyles';
import { Container } from './Container/Container.styled';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Header } from './Header/Header.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header>
        <h1>Phonebook</h1>
      </Header>
      <Container>
        <Section title="Contacts">
          <ContactForm />
          {contacts.length > 0 && loading === false && (
            <>
              <SearchBar />
              <ContactList />
            </>
          )}
          {contacts.length === 0 && loading === false && (
            <h3>You don't have any contacts for now</h3>
          )}
          {loading && <h3>Loading...</h3>}
        </Section>
      </Container>
      <GlobalStyle />
    </>
  );
};
