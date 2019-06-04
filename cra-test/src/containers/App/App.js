import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNumber } from '../../reducers';
import { updateNumber } from '../../actions';
import App from '../../components/App';

const mapStateToProps = state => ({ number: getNumber(state) });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ onClick: updateNumber }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
