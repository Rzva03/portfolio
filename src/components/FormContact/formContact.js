import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { Form, Formik } from 'formik';
import useFormContact from './useFormContact';
import InputText from '../FormComponent/InputText/inputText';
import InputTextArea from '../FormComponent/InputTextArea/inputTextArea';
import defaultStyles from './formContact.module.css';
import { ThemeContext } from '../../context/ThemeContext';

const INITIAL_VALUES = {
    name: '',
    email: '',
    message: ''
}

const LABELS = {
    name: 'Name',
    email: 'Email',
    message: 'Message'
}

const FormContact = () => {
    const {
        form,
        isLoading,
        handleOnSend,
        validationShema
    } = useFormContact();

    const { state } = useContext(ThemeContext);
    const { isLightTheme } = state;


    return (
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={validationShema}
            validateOnChange={false}
            onSubmit={(values, { resetForm }) => {
                values && handleOnSend(values);
                resetForm();
            }}
        >
            <Form className={`flex flex-col space-y-3 w-full md:w-1/3 lg:w-1/4 ${!isLightTheme ? 'formContact--dark' : ''}`} ref={form}>
                <InputText id='name' name='name' className='w-full' label={LABELS.name} />
                <InputText id='email' name='email' className='w-full' label={LABELS.email} />
                <InputTextArea rows={3} className='w-full' cols={23} name='message' id='message' label={LABELS.message} />
                <Button
                    type='submit'
                    className={`rounded-3xl ${defaultStyles.formContact__submit} flex justify-center items-center`}
                    disabled={isLoading}
                >
                    {isLoading && <i className='pi pi-spin pi-spinner mr-2' style={{ 'fontSize': '1em' }}></i>}
                    <span>
                        Submit
                    </span>
                </Button>
            </Form>
        </Formik>
    )
}

export default FormContact;
