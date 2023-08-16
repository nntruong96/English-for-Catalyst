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
  REQUEST_GRADE_SUCCESS,
  REQUEST_UPDATE_CLASSROOM_SUCCESS,
  REQUEST_REMOVE_USER_FAILURE,
  REQUEST_REMOVE_USER_SUCCESS,
  REQUEST_UPDATE_COMMENT_SUCCESS,
  REQUEST_REMOVE_COMMENT_SUCCESS,
  REQUEST_GET_GRADE_ACTIVITIES_SUCCESS,
  REQUEST_GET_COMMENTS_SUCCESS,
  REQUEST_GET_STUDENTS_SUCCESS,
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
        if (res && res.data) {
          if (res.data.error_code) {
            throw new Error(res.data);
          }
          if (callback) {
            callback(null, res);
          }
          successRes(
            dispatch,
            success,
            res.data.userUnits,
            {
              show: true,
              type: 'success',
              title: 'Updated successfully.',
            },
            callback
          );
        }
      })
      .catch((err) => {
        errorRes(
          dispatch,
          null,
          err,
          {
            show: true,
            type: 'error',
            title: 'Updat failed.',
          },
          callback
        );
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
        console.log(res);
        if (res && res.body.error_code) {
          return errorRes(
            dispatch,
            null,
            res.body,
            {
              show: true,
              type: 'warning',
              title: 'Post failed',
            },
            callback
          );
        }
        successRes(
          dispatch,
          success,
          res.body.data,
          {
            show: true,
            type: 'success',
            title: 'Post successfully',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(
          dispatch,
          null,
          err,
          {
            show: true,
            type: 'success',
            title: 'Post successfully',
          },
          callback
        );
      });
  };
};

export const getUserById = (userId, callback = () => {}) => {
  let failure = () => {
    return {
      type: REQUEST_USER_FAILURE,
    };
  };
  return (dispatch) => {
    return userClient
      .getUser(userId)
      .then((res) => {
        if (res.error_code) {
          return callback(res.error_message);
        }
        callback(null, res.data);
      })
      .catch((err) => {
        callback(err);
        errorRes(dispatch, failure, err, null);
      });
  };
};

export const gradeActivi = (data, isRegrade, callback) => {
  let success = ({ activiti, studentId }) => ({
    type: REQUEST_GRADE_SUCCESS,
    activiti,
    studentId,
  });
  return (dispatch, getState) => {
    return userClient
      .gradeActivi(data)
      .then((res) => {
        console.log(res);
        if (res && res.body.error_code) {
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
          { activiti: data.type, studentId: data.userId },
          {
            show: true,
            type: 'success',
            title: 'Grade activiti successfully',
          },
          callback
        );
        if (!isRegrade) {
          let state = getState();
          let { classRoom, gradeActivities } = state.user;
          //after grade activi fetch new list grade
          dispatch(
            getGradeActivites({
              classroomId: classRoom._id,
              ...gradeActivities,
            })
          );
        }
      })
      .catch((err) => {
        console.log('err', err);
        errorRes(
          dispatch,
          null,
          err,
          {
            show: true,
            type: 'error',
            title: 'Grade activiti failed',
          },
          callback
        );
      });
  };
};

export const updateClassRoom = (data, callback = () => {}) => {
  let success = (classRoom) => ({
    type: REQUEST_UPDATE_CLASSROOM_SUCCESS,
    classRoom,
  });
  return (dispatch) => {
    return userClient
      .updateClassRoom(data)
      .then((res) => {
        console.log('data', res.data);
        if (res && res.error_code) {
          return errorRes(
            dispatch,
            null,
            res,
            {
              show: true,
              type: 'warning',
              title: 'Update Faild',
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
            title: 'Updated successfully.',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};

export const removeUser = (data, callback = () => {}) => {
  let failure = () => {
    return {
      type: REQUEST_REMOVE_USER_FAILURE,
    };
  };
  let success = () => {
    return {
      type: REQUEST_REMOVE_USER_SUCCESS,
      studentId: data.studentId,
    };
  };
  return (dispatch) => {
    return userClient
      .removeUser(data)
      .then((res) => {
        if (res.error_code) {
          return errorRes(
            dispatch,
            null,
            res,
            {
              show: true,
              type: 'warning',
              title: 'Remove student faild',
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
            title: 'Remove student successfully.',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, failure, err, null, callback);
      });
  };
};

export const updateComment = (data, callback = () => {}) => {
  console.log('updateComment', data);
  let success = (comments) => ({
    type: REQUEST_UPDATE_COMMENT_SUCCESS,
    comments,
  });
  return (dispatch) => {
    return userClient
      .updateComment(data)
      .then((res) => {
        console.log('updateComment', res);
        if (res && res.error_code) {
          return errorRes(
            dispatch,
            null,
            res,
            {
              show: true,
              type: 'warning',
              title: 'Update Failed',
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
            title: 'Update Successfully',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};

export const removeComment = (
  { classRoomId, commentId, pageSize, pageNumber },
  callback = () => {}
) => {
  let success = (comments) => {
    return {
      type: REQUEST_REMOVE_COMMENT_SUCCESS,
      comments,
    };
  };
  return (dispatch) => {
    return userClient
      .removeComment(
        { classRoomId, commentId },
        { page_size: pageSize, page_number: pageNumber }
      )
      .then((res) => {
        console.log('removeComment', res);
        if (res.error_code) {
          return errorRes(
            dispatch,
            null,
            res,
            {
              show: true,
              type: 'warning',
              title: 'Remove comment faild',
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
            title: 'Remove comment successfully.',
          },
          callback
        );
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};

export const getGradeActivites = (
  { classroomId, pageNumber, pageSize },
  callback = () => {}
) => {
  let success = (data) => {
    return {
      type: REQUEST_GET_GRADE_ACTIVITIES_SUCCESS,
      ...data,
    };
  };
  return (dispatch) => {
    return userClient
      .getGradeActivites(classroomId, {
        page_number: pageNumber,
        page_size: pageSize,
      })
      .then((res) => {
        if (res.data.error_code) {
          return errorRes(dispatch, null, res.data, null, callback);
        }
        dispatch(success(res.data));
        callback();
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};

export const getComments = (
  { classroomId, pageNumber, pageSize },
  callback = () => {}
) => {
  let success = (data) => {
    return {
      type: REQUEST_GET_COMMENTS_SUCCESS,
      ...data,
    };
  };
  return (dispatch) => {
    return userClient
      .getComments(classroomId, {
        page_number: pageNumber,
        page_size: pageSize,
      })
      .then((res) => {
        if (res.data.error_code) {
          return errorRes(dispatch, null, res.data, null, callback);
        }
        dispatch(success(res.data));
        callback();
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};

export const getStudents = (
  { classroomId, pageNumber, pageSize },
  callback = () => {}
) => {
  let success = (data) => {
    return {
      type: REQUEST_GET_STUDENTS_SUCCESS,
      ...data,
    };
  };
  return (dispatch) => {
    return userClient
      .getStudents(classroomId, {
        page_number: pageNumber,
        page_size: pageSize,
      })
      .then((res) => {
        if (res.data.error_code) {
          return errorRes(dispatch, null, res.data, null, callback);
        }
        dispatch(success(res.data));
        callback();
      })
      .catch((err) => {
        errorRes(dispatch, null, err, null, callback);
      });
  };
};
