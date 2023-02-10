import { connect } from "react-redux";
import UserList from "../components/userList";
import { userActions } from "../store/userState";

function mapStateToProps(state = { users: [] }) {
  return {
    list: state.user.users,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAction: () => dispatch(userActions.getUsers()),
  };
};

export const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
