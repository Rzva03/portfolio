import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const useMenu = () => {
    const {
        isMobile
    } = useCheckMobileScreen();

    return {
        isMobile
    }
}

export default useMenu;
