/**
 * User actions
 * @author NNTruong
 */

import UserClient from '../../rest_client/userClient';
import { errorRes, successRes } from './response_utils';
import { userConstants } from '../constants/';
import { authActions } from '../actions';
const userClient = new UserClient();

const {
  INVALID_AVATAR,
  RECEIVE_USER,
  REQUEST_USER,
  REQUEST_USER_FAILURE,
  REQUEST_UPLOAD_AVATAR,
  REQUEST_UPLOAD_AVATAR_FAILURE,
  REQUEST_UPLOAD_AVATAR_SUCCESS,
  REQUEST_UPDATE_USER,
  REQUEST_UPDATE_USER_SUCCESS,
  REQUEST_UPDATE_USER_FAILURE,
  UPDATE_USER_SETTING,
  REQUEST_CLASS_ROOM_FAILURE,
  REQUEST_CLASS_ROOM_SUCCESS,
  REQUEST_POST_COMMENT_SUCCESS,
} = userConstants;

export const invalidAvatar = () => {
  return {
    type: INVALID_AVATAR,
  };
};

export const requestUser = () => {
  return {
    type: REQUEST_USER,
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const shouldFetchUser = (state) => {
  const { hasFetched, isFetching } = state.user;

  let shouldFetch = true;
  if (hasFetched || isFetching) {
    shouldFetch = false;
  }

  return shouldFetch;
};

export const fetchUser = (history) => {
  let failure = () => {
    return {
      type: REQUEST_USER_FAILURE,
    };
  };
  return (dispatch) => {
    dispatch(requestUser());
    return userClient
      .getCurrentUser()
      .then((res) => {
        console.log('user', res.data);
        let user = res.data;
        dispatch(receiveUser(user));
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, null);
        dispatch(authActions.resetApp());
      });
  };
};

export const fetchUserIfNeeded = (history) => {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(fetchUser(history));
    }
  };
};

export const uploadAvatar = (file, callback) => {
  let request = () => ({ type: REQUEST_UPLOAD_AVATAR });
  let success = () => ({
    type: REQUEST_UPLOAD_AVATAR_SUCCESS,
  });
  let failure = () => ({ type: REQUEST_UPLOAD_AVATAR_FAILURE });
  return async (dispatch, getState) => {
    dispatch(request());
    try {
      var formData = new FormData();
      formData.append('avatar', file);
      return userClient.updateCurrentUser(formData).then((res) => {
        if (res && res.error_code) {
          errorRes(
            dispatch,
            failure,
            res,
            {
              title:
                "No joy...we couldn't upload your file.  Try a different one?",
              show: true,
              type: 'warning',
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          res,
          {
            title: 'Success! Your upload is looking good.',
            show: true,
            type: 'success',
          },
          callback
        );
      });
    } catch (err) {
      errorRes(
        dispatch,
        failure,
        err,
        {
          title: "No joy...we couldn't upload your file.  Try a different one?",
          show: true,
          type: 'warning',
        },
        callback
      );
    }
  };
};

export const updateCurrentUser = (data, callback, isUpdatingSetting) => {
  console.log('updateCurrentUser', data);
  let request = () => ({ type: REQUEST_UPDATE_USER });
  let success = (user) => ({ type: REQUEST_UPDATE_USER_SUCCESS, user });
  let failure = () => ({ type: REQUEST_UPDATE_USER_FAILURE });
  return (dispatch) => {
    dispatch(request());
    return userClient
      .updateCurrentUser(data)
      .then((res) => {
        if (res && res.error_code) {
          return errorRes(
            dispatch,
            failure,
            res,
            {
              show: true,
              type: 'warning',
              title:
                res.error_code === 10023
                  ? "The password you entered doesn't match what's on file. Try again?"
                  : '',
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          res.data,
          {
            show: true,
            type: 'success',
            title: isUpdatingSetting
              ? 'Updated successfully.'
              : "Success - we've saved your updates.",
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, null);
      });
  };
};

export const updateUser = (data, callback = () => {}) => {
  let success = (userUnits) => ({
    type: UPDATE_USER_SETTING,
    userUnits,
  });
  return (dispatch) => {
    return userClient
      .updateCurrentUserUnit(data)
      .then((res) => {
        console.log('res', res);
        if (res && res.data) {
          if (res.data.error_code) {
            throw new Error(res.data);
          }
          if (callback) {
            callback(null, res);
          }
          console.log('res.data.userUnits', res.data.userUnits);
          dispatch(success(res.data.userUnits));
        }
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};
export const fetchClassRoom = () => {
  let failure = () => {
    return {
      type: REQUEST_CLASS_ROOM_FAILURE,
    };
  };
  let receiveClassRoom = (clasRoom) => {
    return {
      type: REQUEST_CLASS_ROOM_SUCCESS,
      data: clasRoom,
    };
  };
  return (dispatch) => {
    dispatch(requestUser());
    return userClient
      .getCurrentClassRoom()
      .then((res) => {
        dispatch(receiveClassRoom(res.data));
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, null);
        // dispatch(authActions.resetApp());
      });
  };
};

export const postComment = (data, callback) => {
  let success = (comments) => ({
    type: REQUEST_POST_COMMENT_SUCCESS,
    comments,
  });
  return (dispatch) => {
    return userClient
      .postComment(data)
      .then((res) => {
        console.log('res', res.body);
        if (res && res.error_code) {
          return errorRes(
            dispatch,
            null,
            res.body,
            {
              show: true,
              type: 'warning',
              title: '',
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          res.body,
          {
            show: true,
            type: 'success',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null);
      });
  };
};
