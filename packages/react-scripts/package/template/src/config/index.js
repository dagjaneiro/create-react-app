import configureStore from './store';

export default () => {
  const store = configureStore();

  return { store };
};
