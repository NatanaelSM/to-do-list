import './styles/loginStyle.css'
import imgLogin from "../../assets/imagelogin.svg";
import { FormLogin } from './components/FormLogin';

export const Login = () => {

    return (
        <div className="main-login">
            <div className="left-login">
                <div className="frase-login">
                    <span>To <span style={{ color: 'rgb(255, 168, 167)', fontStyle: 'italic' }}>D</span>o<span style={{ color: 'rgb(255, 168, 167)', paddingInline: "0.1vw" }}>I</span>t</span>
                    <span>Organize sua vida!</span>
                </div>
                <img src={imgLogin} className='img-login' alt='Imagem login' />
            </div>
            <div className="rigth-login">
                <FormLogin />
            </div>
        </div>
    )
}