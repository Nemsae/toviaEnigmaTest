import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'react-toolbox';

import Enigma from '../../routes/Enigma';

/*  Stylesheet */
import style from './styles';

function App() {
  return (
    <Layout style={style.container}>
      <Switch>
        <Route path="/" exact component={Enigma} />
      </Switch>
    </Layout>
  );
}

export default App;
