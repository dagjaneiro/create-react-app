import { createStore } from 'redux';
import rootReducer from '../reducers';

const isDevelopmentMode = process.env.NODE_ENV === 'development';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    isDevelopmentMode && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__({ name: 'Main Navbar' })
      : f => f
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
