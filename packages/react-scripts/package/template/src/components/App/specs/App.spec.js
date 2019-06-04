import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      number: 10,
      onClick: jest.fn(),
    };

    wrapper = shallow(<App {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('when clicking the "click me" button', () => {
    it('calls onClick', () => {
      const button = wrapper.find('button');

      button.simulate('click');

      expect(props.onClick).toHaveBeenCalled();
    });
  });
});
