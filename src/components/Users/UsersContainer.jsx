import React from 'react';
import {connect} from "react-redux";
import {
  follow, getUsers,
  setCurrentPage, toggleFollowingProgress,
  unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             usersData={this.props.usersData}
             followingInProgress={this.props.followingInProgress}/>
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};

export default connect(mapStateToProps, {
  follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers
})(UsersContainer);