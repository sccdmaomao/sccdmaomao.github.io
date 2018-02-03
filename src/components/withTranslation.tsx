// Used in test and storybook to wrap IntlProvier
import React from 'react'
import { IntlProvider } from 'react-intl'

// tslint:disable-next-line:no-var-requires
const translations = require('../i18n/en.json')

const withTranslation = WrappedComponent => (
  <IntlProvider locale="en" messages={translations}>
    <WrappedComponent />
  </IntlProvider>
)

export default withTranslation
