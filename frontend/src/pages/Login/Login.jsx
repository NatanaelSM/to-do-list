import './styles/loginStyle.css'
import imgLogin from "../../assets/imagelogin.svg";
import { FormLogin } from './components/FormLogin';

export const Login = () => {

    return (
        <div className="container-login">
            <div className="left-login">
                <h1>Faça login</h1>
                <img src={imgLogin} className='img-login' alt='Imagem login' />
            </div>
            <div className="rigth-login">
                <div className="container-form-login">
                    <h1 className='header-login'>LOGIN</h1>
                    <FormLogin />
                    <div className='cadastro-login'>
                        <span>Não possui cadastro?</span>
                        <a href='#'><u>cadastre-se</u></a>
                    </div>
                </div>
            </div>
        </div>
    )
}