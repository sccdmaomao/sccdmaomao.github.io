import '@blueprintjs/core/lib/css/blueprint.css'
import Layout from 'components/Layout'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import RouteWrapper from 'routes'
import './global.css'
import { history, store } from './store/initApp'

const AppContainer = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Layout>
                    <Route path="/" component={RouteWrapper} />
                </Layout>
            </ConnectedRouter>
        </Provider>
    )
}

export default AppContainer
