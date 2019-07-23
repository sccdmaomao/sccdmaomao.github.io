import Layout from 'components/Layout'
import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { addLocaleData, IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Contact, Home, Project } from 'routes'
import { store } from './store/initApp'
const locale = 'en'
/* tslint:disable */
const translations = require(`./i18n/${locale}.json`)
const i18n = require(`react-intl/locale-data/${locale}`)
addLocaleData(i18n)
import 'thirdParty.scss'
/* tslint:enable */

const AppContainer = () => {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <IntlProvider locale={locale} messages={translations} key={locale}>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </Layout>
          </Router>
        </IntlProvider>
      </CookiesProvider>
    </Provider>
  )
}

export default AppContainer
