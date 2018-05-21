export const FETCH_USERS = 'fetch_users';

// Use the customized axios instance for client to call the external API server
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/users');

  dispatch({ type: FETCH_USERS, payload: res });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  const res = await axiosInstance.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
