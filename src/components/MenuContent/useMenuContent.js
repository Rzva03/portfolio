import { useCallback } from "react";

const useMenuContent = (props) => {
    const {
        setIsMenuMobileVisible,
        onTabChangeActiveIndex
    } = props;

    const handleOnClick = useCallback((e, index = -1) => {
        setIsMenuMobileVisible(false);
        if (index >= 0) {
            onTabChangeActiveIndex(e, index);
            return;
        }
        onTabChangeActiveIndex(e);
    }, [onTabChangeActiveIndex, setIsMenuMobileVisible]);

    return {
        handleOnClick
    }
}

export default useMenuContent;
