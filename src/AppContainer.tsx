import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from 'react-cookie'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from 'routes/HomePage'
import { client, store } from './store/initApp'
const locale = 'en'
/* tslint:disable */
const translations = require(`./i18n/${locale}.json`)
const i18n = require(`react-intl/locale-data/${locale}`)
/* tslint:enable */
addLocaleData(i18n)

import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

const AppContainer = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <CookiesProvider>
          <IntlProvider locale={locale} messages={translations} key={locale}>
            <Router>
              <Switch>
                <Route path="/" component={HomePage} />
              </Switch>
            </Router>
          </IntlProvider>
        </CookiesProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default AppContainer
