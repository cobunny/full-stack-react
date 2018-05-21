import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/actions';
import { Helmet } from 'react-helmet';
import requireAuth from '../components/requireAuth';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.admins.length} admins`}</title>
        <meta property="og:title" content="Admins" />
      </Helmet>
    );
  }

  render() {
    return (
      <div className="center-align">
        {this.head()}
        <h3>Protected Admin Page</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => {
  return { admins };
};

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsListPage)
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
