import React from 'react';
import { InputText as InputTextPrime } from 'primereact/inputtext';
import { useField } from "formik";

const InputText = (props) => {
    const {
        id,
        name,
        label,
        ...rest
    } = props;

    const [field, meta] = useField(name);

    return (
        <div className='flex flex-col space-y-1'>
            <span className='p-float-label'>
                <InputTextPrime
                    id={id}
                    name={name}
                    className='w-full'
                    {...rest}
                    {...field}
                />
                <label htmlFor={id} className='font-normal text-sm'>{label}</label>
            </span>
            {meta.error && meta.touched && (
                <small className='text-red-700 inline-block text-xs'>{meta.error}</small>
            )}
        </div>
    );
}

export default InputText;
