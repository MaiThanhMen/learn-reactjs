import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import RegisterForm from '../RegisterForm';
import PropTypes from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async values => {
        try {
            // Auto set username = email
            values.username = values.email;

            const action = register(values);
            const resultAction = await dispatch(action);
            unwrapResult(resultAction);

            // Close dialog
            const { closeDialog } = props;
            if (closeDialog) closeDialog();

            // Do something here on register successfully
            enqueueSnackbar('Register Successfully 🎉 🎉 🎉', { variant: 'success' });
        } catch (error) {
            console.log('Failed to register', error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }

    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;