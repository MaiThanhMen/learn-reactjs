import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string().required('Vui lòng nhập tiêu đề').min(5, 'Tiêu đề quá ngắn'),
    });

    const useform = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmitForm = (values) => {
        console.log('SUBMIT TodoForm', values);
    };

    return (
        <form onSubmit={useform.handleSubmit(handleSubmitForm)}>
            Todo Form
            <InputField name="title" lable="todo" form={useform} />
        </form>
    );
}

export default TodoForm;
