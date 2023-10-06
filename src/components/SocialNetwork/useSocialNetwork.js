import { useCallback, useMemo } from "react";
const LINKEDIN = 'linkedin';
const GITHUB = 'github'
const PROFILE_LINKEDIN = 'https://www.linkedin.com/in/abraham-v%C3%ADctor-zaragoza-rodr%C3%ADguez-6659a1222/';
const PROFILE_GITHUB = 'https://github.com/Rzva03';

const useSocialNetwork = () => {
    const handleOnRedirectTo = useCallback((to) => {
        if (to === LINKEDIN) {
            window.open(PROFILE_LINKEDIN, '_blank');
        }
        if (to === GITHUB) {
            window.open(PROFILE_GITHUB, '_blank');
        }
    }, []);

    const buttons = useMemo(() => {
        return [
            {
                icon: 'pi pi-linkedin',
                onClick: () => { handleOnRedirectTo(LINKEDIN) },
                ariaLabel: 'linkedin'
            },
            {
                icon: 'pi pi-github',
                onClick: () => { handleOnRedirectTo(GITHUB) },
                ariaLabel: 'github'
            }
        ]
    }, [handleOnRedirectTo]);

    return {
        buttons
    }
}

export default useSocialNetwork;
