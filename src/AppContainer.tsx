import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { CookiesProvider } from 'react-cookie';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { client, store } from './store/initApp';
const locale = 'en';
/* tslint:disable */
const translations = require(`./i18n/${locale}.json`);
const i18n = require(`react-intl/locale-data/${locale}`);
require('./fonts.scss');
/* tslint:enable */
addLocaleData(i18n);

const AppContainer = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CookiesProvider>
          <IntlProvider locale={locale} messages={translations} key={locale}>
            <Router>
              <Switch>
                <Route
                  path="/login"
                  component={() => <h1>A Foo walks into a Bar and says</h1>}
                />
                <Route path="/" component={() => <h1>Hello World</h1>} />
              </Switch>
            </Router>
          </IntlProvider>
        </CookiesProvider>
      </Provider>
    </ApolloProvider>
  );
};

export default AppContainer;
