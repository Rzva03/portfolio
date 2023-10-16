import { useCallback, useMemo, useRef, useState } from "react";
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const useFormContact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCorrectSending, setIsCorrectSending] = useState(true);
    const form = useRef();

    const validationShema = useMemo(() => {
        const shema = Yup.object().shape({
            name: Yup.string()
                .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            message: Yup.string().required('Required')
        });
        return shema;
    }, []);

    const handleOnSend = useCallback(async (values) => {
        setIsLoading(true);
        emailjs.sendForm('service_oi5lpgh', 'template_uaphb9c', form.current, 'ktVp3nRXcV-CSGAlI')
            .then((result) => {
                setIsLoading(false);
                setIsCorrectSending(true);
                console.log(result.text);
            }, (error) => {
                setIsLoading(false);
                setIsCorrectSending(false);
                console.log(error.text);
            });
    }, []);

    return {
        form,
        handleOnSend,
        isLoading,
        validationShema,
        isCorrectSending,
    }
}

export default useFormContact;
