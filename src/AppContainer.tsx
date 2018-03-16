import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from 'react-cookie'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, NotFound } from 'routes'
import NavBar from './components/NavBar'
import { client, store } from './store/initApp'

const locale = 'en'
/* tslint:disable */
const translations = require(`./i18n/${locale}.json`)
const i18n = require(`react-intl/locale-data/${locale}`)
require('./global.scss')
/* tslint:enable */
addLocaleData(i18n)

const AppContainer = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CookiesProvider>
          <IntlProvider locale={locale} messages={translations} key={locale}>
            <div style={{ backgroundColor: '#7FFFD4' }}>
              <NavBar />
              <Router>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/projects" component={HomePage} />
                  <Route path="/contact" component={HomePage} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </Router>
            </div>
          </IntlProvider>
        </CookiesProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default AppContainer
