import { useCallback } from "react";
import logoReact from "../../assets/img/react.png";
import logoTailwind from "../../assets/img/tailwind.png";
import logoPrimeReact from "../../assets/img/primereact.png";
import logoFigma from "../../assets/img/figma.png";
import logoWebpack from "../../assets/img/webpack.png";
import logoMysql from "../../assets/img/mysql.png";
import logoGraphql from "../../assets/img/graphql.png";
import logoGit from "../../assets/img/git.png";
import GetLogo from "../GetLogo/getLogo";

const useTechnology = () => {

    const getIcon = useCallback((id, name) => {
        switch (id) {
            case 1:
                return (
                    <GetLogo logo={logoReact} name={name} />
                )
            case 2:
                return (
                    <GetLogo logo={logoTailwind} name={name} />
                )
            case 3:
                return (
                    <GetLogo logo={logoPrimeReact} name={name} />
                )
            case 4:
                return (
                    <GetLogo logo={logoFigma} name={name} />
                )
            case 5:
                return (
                    <GetLogo logo={logoWebpack} name={name} />
                )
            case 6:
                return (
                    <GetLogo logo={logoMysql} name={name} />
                )
            case 7:
                return (
                    <GetLogo logo={logoGraphql} name={name} />
                )
            case 8:
                return (
                    <GetLogo logo={logoGit} name={name} />
                )
            default:
                return (
                    <GetLogo logo={logoReact} name={name} />
                )
        }
    }, []);

    return {
        getIcon
    }
}

export default useTechnology;
