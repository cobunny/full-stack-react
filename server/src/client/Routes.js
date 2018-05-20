import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    // Attach 'loadData' method to the component
    loadData,
    path: '/users',
    component: UsersList
  }
];
