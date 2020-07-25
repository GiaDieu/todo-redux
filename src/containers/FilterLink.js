import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";
import Link from "../components/Link";
const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilters,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);
