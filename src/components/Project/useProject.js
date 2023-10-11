import { useEffect, useState } from "react";

const useProject = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 600);
    }, []);

    return {
        isLoading
    }
}

export default useProject;
