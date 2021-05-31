import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import { StorageKeys } from 'constants/index';

// REGISTER
export const register = createAsyncThunk('user/register', async (payload) => {
    // Call API to register
    const data = await userApi.register(payload);

    // Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    // data.user === action.payload === initialState.current in 'extraReducers' [register.fulfilled]
    return data.user; 
});

// LOGIN
export const login = createAsyncThunk('user/login', async (payload) => {
    // Call API to register
    const data = await userApi.login(payload);

    // Save data to local storage
    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));

    // return user data
    // data.user === action.payload === initialState.current in 'extraReducers' [login.fulfilled]
    return data.user;
});

const userSlice =  createSlice({
    name: 'user',       // this name will be shown in redux
    initialState: {
        current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        setting: {}
    },
    reducers: {
        logout(state) {
            // clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USER);

            // reset current state
            state.current = {};
        }
    },                                                           // This is used only for Sync funtions
    extraReducers: {                                                        // To use async funtions (async thunk), then custom them at here
        // [register.fulfilled] <=> 'user/register/fulfilled'
        [register.fulfilled]: (state, action) => {
            // state.current === action.payload === data.user in 'createAsyncThunk' register
            state.current = action.payload;
        },
        // [login.fulfilled] <=> 'user/login/fulfilled'
        [login.fulfilled]: (state, action) => {
            // state.current === action.payload === data.user in 'createAsyncThunk' login
            state.current = action.payload;
        }
    }
});

const { actions, reducer } = userSlice;
export const { logout } = actions;
export default reducer;
