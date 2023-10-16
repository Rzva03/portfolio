
import { useField } from 'formik';
import { InputTextarea as InputTextareaPrime } from 'primereact/inputtextarea';
import defaultStyles from './inputTextArea.module.css';

const InputTextArea = (props) => {
    const {
        id,
        name,
        label,
        ...rest
    } = props;

    const [field, meta] = useField(name);

    return (
        <div className='flex flex-col relative'>
            <span className='p-float-label'>
                <InputTextareaPrime
                    id={id}
                    name={name}
                    className='w-full'
                    {...rest}
                    {...field}
                />
                <label htmlFor={id} className='font-normal text-sm'>{label}</label>
            </span>
            {meta.error && meta.touched && (
                <small className={`text-red-700 inline-block text-xs absolute bottom-0 left-0 -mb-3 ${defaultStyles.inputTextArea__error}`}>{meta.error}</small>
            )}
        </div>
    );
}

export default InputTextArea;
