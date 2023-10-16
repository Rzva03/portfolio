import React from 'react';
import defaultStyles from './footer.module.css';
import useFooter from './useFooter';

const Footer = () => {
    const {
        currentYear
    } = useFooter();

    return (
        <footer className={`flex justify-center items-center px-5 py-2 text-xs font-light bg-blue-1000 ${defaultStyles.footer}`}>
            <strong>© Copyright {currentYear}, Victor Rodriguez</strong>
        </footer>
    )
}

export default Footer;
