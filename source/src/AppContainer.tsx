import '@blueprintjs/core/lib/css/blueprint.css'
import Layout from 'components/Layout'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import Routes from 'routes'
import { history, store } from './store/initApp'

const locale = 'en'
/* tslint:disable */
const translations = require(`./i18n/${locale}.json`)
const i18n = require(`react-intl/locale-data/${locale}`)
addLocaleData(i18n)
/* tslint:enable */

const AppContainer = () => {
  return (
    <Provider store={store}>
      <IntlProvider locale={locale} messages={translations} key={locale}>
        <ConnectedRouter history={history}>
          <Layout>
            <Routes />
          </Layout>
        </ConnectedRouter>
      </IntlProvider>
    </Provider>
  )
}

export default AppContainer
