import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { CookiesProvider } from 'react-cookie'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { client, store } from './store/initApp'
import App from './App'

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
            <App />
          </IntlProvider>
        </CookiesProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default AppContainer
