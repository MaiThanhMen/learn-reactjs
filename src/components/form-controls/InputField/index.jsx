import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;
    const hasError = !!errors[name];

    return (
        <Controller 
            as={TextField}
            name={name}
            control={form.control}
            fullWidth
            margin="normal"
            variant="outlined"
            label={label}
            disabled={disabled}
            error={hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputField;