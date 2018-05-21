export const FETCH_USERS = 'fetch_users';

// Use the customized axios instance for client to call the external API server
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/users');

  dispatch({ type: FETCH_USERS, payload: res });
};
