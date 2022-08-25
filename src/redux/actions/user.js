import { userSliceActions } from 'redux/reducer/user';

const api = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 300);
  });

export const login = (params, callback) => {
  return (dispatch) => {
    return api(params)
      .then((response) => {
        return dispatch(
          userSliceActions.setData({
            isLogged: true,
          })
        );
      })
      .catch((error) => {
        //fetch failed
        console.log('error', error);
        if (callback) {
          callback(error);
        }
      });
  };
};
