import { alertConstants } from '../constants';

const { SUCCESS, ERROR, WARNING, HIDE, INFO } = alertConstants;

export const success = (title, subtitle, autoHideTime) => {
    return {
        type: SUCCESS,
        title,
        subtitle,
        autoHideTime,
    };
};

export const error = (title, subtitle, autoHideTime) => {
    return {
        type: ERROR,
        title,
        subtitle,
        autoHideTime,
    };
};

export const clear = (title, subtitle) => {
    return { type: HIDE, title, subtitle };
};

export const warning = (title, subtitle, action, autoHideTime) => {
    return {
        type: WARNING,
        title,
        subtitle,
        action,
        autoHideTime,
    };
};

export const info = (title, subtitle, action, autoHideTime) => {
    return {
        type: INFO,
        title,
        subtitle,
        action,
        autoHideTime,
    };
};
