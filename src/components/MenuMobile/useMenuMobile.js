import { useState } from "react";

const useMenuMobile = () => {
    const [isMenuMobileVisible, setIsMenuMobileVisible] = useState(false);

    return {
        isMenuMobileVisible,
        setIsMenuMobileVisible
    }
}

export default useMenuMobile;