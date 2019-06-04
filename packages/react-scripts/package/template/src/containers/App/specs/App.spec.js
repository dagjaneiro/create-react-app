import React from 'react';
import configureStore from 'redux-mock-store';
import App from '../App';
import { updateNumber } from '../../../actions';
import { shallowWithStore } from '../../../helpers/specs/shallow.with.store';

describe('Connect(App)', () => {
  const mockStore = configureStore();
  const store = mockStore({ app: { number: 10 } });

  it('renders without crashing', () => {
    const wrapper = shallowWithStore(<App />, store);

    expect(wrapper).toMatchSnapshot();
  });

  it('dispatches an action to update the number', done => {
    const wrapper = shallowWithStore(<App />, store);
    const props = wrapper.props();

    expect(props.onClick(10)).toDispatchActions(updateNumber(10), done);
  });
});
