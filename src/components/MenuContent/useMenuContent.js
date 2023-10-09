import { useCallback } from "react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const useMenuContent = (props) => {
    const {
        setIsMenuMobileVisible,
        onTabChangeActiveIndex
    } = props;
    const { isMobile } = useCheckMobileScreen();
    const handleOnClick = useCallback((e, index = -1) => {
        if (isMobile) {
            setIsMenuMobileVisible(false);
        }
        if (index >= 0) {
            onTabChangeActiveIndex(e, index);
            return;
        }
        onTabChangeActiveIndex(e);
    }, [isMobile, onTabChangeActiveIndex, setIsMenuMobileVisible]);

    return {
        handleOnClick
    }
}

export default useMenuContent;
