import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './Components/Header';
import { ThemeProvider } from 'styled-components';
import darkTheme from './Themes/dark';
import Salas from './Pages/Salas';

import Container from './styles';
import Sala from './Pages/Sala';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" exact component={_ => <Redirect to="/salas"/>}/>
        <Route path="/salas" exact component={Salas}/>
        <Route path="/salas/:roomId" exact component={Sala}/>
      </Switch>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
