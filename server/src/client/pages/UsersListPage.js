import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/actions';
import { Helmet } from 'react-helmet';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} users`}</title>
        <meta property="og:title" content="Users" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="center-align">
        {this.head()}
        <h3>Users List</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList)
};
