import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    // Attach 'loadData' method to the component
    ...UsersListPage,
    path: '/users'
  }
];
