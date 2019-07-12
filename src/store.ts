import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './reduxs'

const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
  const middlewares = [sagaMiddleware]
  const storeWithDevTools = composeWithDevTools(applyMiddleware(...middlewares))

  const enhancer = process.env.NODE_ENV === 'production' ? applyMiddleware(...middlewares) : storeWithDevTools

  return createStore(rootReducer, enhancer)
}
