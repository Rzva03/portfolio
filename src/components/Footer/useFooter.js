import { useMemo } from "react";

const useFooter = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return {
        currentYear
    };
};

export default useFooter;
