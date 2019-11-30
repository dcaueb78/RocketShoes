import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';
import colors from './styles/colors';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
    </>
  );
}
