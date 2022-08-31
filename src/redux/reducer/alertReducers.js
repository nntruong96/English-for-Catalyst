import { alertConstants, RESET_APP } from '../constants';
import { createReducer } from '@reduxjs/toolkit';

const { SUCCESS, ERROR, CLEAR, WARNING, HIDE, INFO } = alertConstants;

const initialState = {
    mess: '',
    title: '',
    subtitle: '',
    show: false,
    type: '',
    autoHideTime: 10000,
    action: [],
};
const alertReducers = createReducer(initialState, {
    [RESET_APP]: (state, action) => {
        state = initialState;
        return state;
    },
    [SUCCESS]: (state, action) => {
        state.type = 'success';
        state.title = action.title;
        state.subtitle = action.subtitle;
        state.autoHideTime = action.autoHideTime;
        state.show = true;
        return state;
    },
    [ERROR]: (state, action) => {
        state.type = 'error';
        state.subtitle = action.subtitle;
        state.title = action.title;
        state.autoHideTime = action.autoHideTime;
        state.show = true;
        return state;
    },
    [HIDE]: (state, action) => {
        state = {
            ...initialState,
            type: state.type,
            subtitle: state.subtitle,
            title: state.title,
        };
        return state;
    },
    [CLEAR]: (state, action) => {
        state = {
            ...initialState,
            type: state.type,
            subtitle: state.subtitle,
            title: state.title,
        };
        return state;
    },
    [WARNING]: (state, action) => {
        state.type = 'warning';
        state.title = action.title;
        state.subtitle = action.subtitle;
        state.show = true;
        state.action = action.action;
        state.autoHideTime = action.autoHideTime;
        return state;
    },
    [INFO]: (state, action) => {
        state.type = 'info';
        state.title = action.title;
        state.subtitle = action.subtitle;
        state.show = true;
        state.autoHideTime = action.autoHideTime;
        state.action = action.action;
        return state;
    },
});

export default alertReducers;
