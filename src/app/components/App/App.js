import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'react-toolbox';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import theme from '../../../../build/assets/react-toolbox/theme.css';
import Enigma from '../../routes/Enigma';

/*  Stylesheet */
import style from './styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout style={style.container}>
        <Switch>
          <Route path="/" exact component={Enigma} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
