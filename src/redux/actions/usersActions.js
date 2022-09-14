import UserClient from '../../rest_client/userClient';
import { errorRes, successRes } from './response_utils';
import { usersConstants } from '../constants';
const {
    REQUEST_GET_USERS,
    REQUEST_GET_USERS_FAILED,
    REQUEST_GET_USERS_SUCCESS,
    REQUEST_CREATE_USERS_SUCCESS,
    REQUEST_CREATE_USERS,
    REQUEST_CREATE_USERS_FAILED,
    REQUEST_UPDATE_USERS_SUCCESS,
    REQUEST_UPDATE_USERS,
    REQUEST_UPDATE_USERS_FAILED,
    REQUEST_DELETE_USERS_SUCCESS,
    REQUEST_DELETE_USER_SUCCESS,
} = usersConstants;
const userClient = new UserClient();
export const fetchUsers = (params = {}) => {
    let failure = () => {
        return {
            type: REQUEST_GET_USERS_FAILED,
        };
    };
    let receiveUsers = (data) => {
        return {
            type: REQUEST_GET_USERS_SUCCESS,
            data,
        };
    };
    let requestUsers = (data) => {
        return {
            type: REQUEST_GET_USERS,
            data,
        };
    };
    return (dispatch) => {
        dispatch(requestUsers());
        return userClient
            .getUsers(params)
            .then((res) => {
                let users = res.data;
                dispatch(receiveUsers(users));
            })
            .catch((err) => {
                errorRes(dispatch, failure, err, null);
            });
    };
};

export const createUser = (params = {}, avatar = '', callback) => {
    let failure = () => {
        return {
            type: REQUEST_CREATE_USERS_FAILED,
        };
    };
    let receiveUser = (data) => {
        return {
            type: REQUEST_CREATE_USERS_SUCCESS,
            data,
        };
    };
    let requestUser = (data) => {
        return {
            type: REQUEST_CREATE_USERS,
            data,
        };
    };
    return (dispatch) => {
        let user;
        dispatch(requestUser());
        return userClient
            .createUsers(params)
            .then((res) => {
                if (res.body.data) {
                    user = res.body.data.user;
                    successRes(
                        dispatch,
                        receiveUser,
                        user,
                        { show: true, title: 'Success - we have a new user!' },
                        callback
                    );
                    return;
                }
                errorRes(dispatch, failure, res, { show: true }, callback);
            })

            .catch((err) => {
                console.log(err);
                errorRes(dispatch, failure, err, { show: true });
            });
    };
};

export const uploadAvatar = (file, userId, callback) => {
    return async () => {
        try {
            var formData = new FormData();
            formData.append('avatar', file);
            return userClient.updateUser(formData, userId).then((res) => {
                if (res && res.error_code) {
                    callback({ message: 'Upload failed' });
                }
                callback();
            });
        } catch (err) {
            callback({ message: 'Upload failed' });
        }
    };
};
export const updateUser = (params = {}, userId, callback) => {
    let failure = () => {
        return {
            type: REQUEST_UPDATE_USERS_FAILED,
        };
    };
    let receiveUser = (data) => {
        return {
            type: REQUEST_UPDATE_USERS_SUCCESS,
            data,
        };
    };
    let requestUser = () => {
        return {
            type: REQUEST_UPDATE_USERS,
        };
    };
    return (dispatch) => {
        let user;
        dispatch(requestUser());
        return userClient
            .updateUser(params, userId)
            .then((res) => {
                if (res.data) {
                    user = res.data;
                    return successRes(
                        dispatch,
                        receiveUser,
                        user,
                        {
                            show: true,
                            title: 'Successfully updated.',
                        },
                        callback
                    );
                }
                errorRes(
                    dispatch,
                    failure,
                    res,
                    {
                        show: true,
                        title: 'Update User Failed!',
                        message: <></>,
                    },
                    callback
                );
            })
            .catch((err) => {
                console.log(err);
                errorRes(
                    dispatch,
                    failure,
                    err,
                    {
                        show: true,
                        title: 'Update User Failed!',
                        message: <></>,
                    },
                    callback
                );
            });
    };
};

export const deleteUser = (userId, callback) => {
    let receiveUser = (data) => {
        return {
            type: REQUEST_DELETE_USER_SUCCESS,
            data,
        };
    };
    return (dispatch) => {
        return userClient
            .deleteUser(userId)
            .then((res) => {
                return successRes(
                    dispatch,
                    receiveUser,
                    userId,
                    {
                        show: true,
                        title: 'User has been deleted.',
                    },
                    callback
                );
            })
            .catch((err) => {
                console.log(err);
                errorRes(
                    dispatch,
                    null,
                    err,
                    {
                        show: true,
                        title: 'Delete User Failed!',
                        message: <></>,
                    },
                    callback
                );
            });
    };
};

export const deleteUsers = (usersId, callback) => {
    let receiveUser = (data) => {
        return {
            type: REQUEST_DELETE_USERS_SUCCESS,
            data,
        };
    };
    return (dispatch) => {
        let request = usersId.map((id) => userClient.deleteUser(id));
        return Promise.all(request)
            .then((res) => {
                return successRes(
                    dispatch,
                    receiveUser,
                    usersId,
                    {
                        show: true,
                        title: 'Users have been deleted.',
                    },
                    callback
                );
            })
            .catch((err) => {
                console.log(err);
                errorRes(
                    dispatch,
                    null,
                    err,
                    {
                        show: true,
                        title: 'Delete Users Failed!',
                        message: <></>,
                    },
                    callback
                );
            });
    };
};
