import { Link } from "react-router-dom";
import "../styles/btnRedirectStyle.css"

export const BtnRedirect = ({caminhoRedirect, icone, textoRedirect}) => {

    return (
        <Link to={caminhoRedirect} className="btn">
            {icone}
            <span>{textoRedirect}</span>
        </Link>  
    );
};
