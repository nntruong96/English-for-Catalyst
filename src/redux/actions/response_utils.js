import { alertActions, authActions } from './';
// err = response {status: number, body:{error_code: string, error_message}}
// alert = {show: boolean, type: string ('warning', 'error', 'info', 'success'), [title: string, message: string]}

// dispatch error responses in a standard format
export let errorRes = function (dispatch, failure, err, alert, callback) {
    if (failure) {
        dispatch(failure(err));
    }
    if (callback) callback(err);

    if (!alert || !alert.show) return;

    let typeErr = alert.type || 'info';
    let errTitle = 'Unexpected Error.';
    let errMessage = '';
    if (err) {
        if (err.status === 401) dispatch(authActions.logout());
        if (err.status === 500) errTitle = 'Lost Connection.';
        if (err.body && err.body.error_message) errTitle = err.body.error_message;
        if (err.response && err.response.text) errTitle = err.response.text;
        if (err.error_message) errTitle = err.error_message;
    }

    if (alert.title) errTitle = alert.title;
    if (alert.message) errMessage = alert.message;
    return dispatch(alertActions[typeErr](errTitle, errMessage));
};

// dispatch success response in a standard format
export let successRes = function (dispatch, success, results, alert, callback) {
    if (success) {
        dispatch(success(results));
    }
    if (callback) callback(null, results);
    if (!alert || !alert.show) return;
    return dispatch(alertActions.success(alert.title, alert.message));
};
