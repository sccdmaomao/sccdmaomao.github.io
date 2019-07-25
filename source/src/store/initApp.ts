import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createHashHistory } from 'history'
import { loadingBarReducer } from 'react-redux-loading-bar'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

export const history = createHashHistory()
const reducers = {
  router: connectRouter(history),
  form: formReducer,
  loadingBar: loadingBarReducer
}

const reducer = combineReducers(reducers)

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(routerMiddleware(history))
)
const composedEnhancers = compose(middlewareEnhancer)

export const store = createStore(reducer, {}, composedEnhancers)
