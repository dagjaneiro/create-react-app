import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { registerAssertions } from 'redux-actions-assertions/jest';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Assertions for redux-mock-store
beforeEach(registerAssertions);

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
