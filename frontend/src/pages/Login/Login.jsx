import './styles/loginStyle.css';
import imgLogin from "../../assets/imagelogin.svg";
import { useContext, useRef } from 'react';
import { Context } from "../../context/AuthContext";

export const Login = () => {

    const { handleLogin } = useContext(Context);
    const emailRef = useRef(null);
    const senhaRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const email = emailRef.current.value;
            const senha = senhaRef.current.value;
            handleLogin(email, senha);

        } catch (err) {
            console.log(err);
        }
    };

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
                <div className='container-form'>
                    <form onSubmit={handleSubmit} className='form'>
                        <h1 className='header-form'>LOGIN</h1>
                        <div className="form-group">
                            <label htmlFor='usuario'>Email</label>
                            <input ref={emailRef} type="text" id='usuario' name='usuario' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor='senha'>Senha</label>
                            <input ref={senhaRef} type="password" id='senha' name='senha' required />
                        </div>
                        <div className="form-group">
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                    <div className='cadastro-form'>
                        <span>Não possui cadastro?</span>
                        <a href='#'><u>cadastre-se</u></a>
                    </div>
                </div>
            </div>
        </div>
    );
};
