import { loadingBarReducer } from 'react-redux-loading-bar'
import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
const reducers = {
  form: formReducer,
  loadingBar: loadingBarReducer
}

const reducer = combineReducers(reducers)

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)
