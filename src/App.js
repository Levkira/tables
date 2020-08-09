import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Tabs from './components/Tabs';
import { Container, Header } from 'semantic-ui-react'

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header as='h2' floated='right'>Test task</Header>
        <Tabs />
      </Container>
    </Provider>
  );
}

export default App;
