/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Main } from '@screens';
import { Provider } from 'react-redux';
import { store } from '@state';

declare const global: { HermesInternal: null | {} };

export const App = () => {
  return (
    <Provider {...{ store }}>
      <Main />
    </Provider>
  );
};
