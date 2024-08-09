import './styles/loginStyle.css';
import { useContext, useRef, useState } from 'react';
import { Context } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const Login = () => {

    const { handleLogin } = useContext(Context);
    const [erro, setErro] = useState('');
    const emailRef = useRef(null);
    const senhaRef = useRef(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const email = emailRef.current.value;
            const senha = senhaRef.current.value;
            const res = await handleLogin(email, senha);
            if(res.error){
                setErro(res.msg);
            }
            setErro('')

        } catch (err) {
            setErro('Erro inesperado. Tente novamente.');
        }
    };

    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit}>
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
                <Link to="/usuario/cadastro" className="link-cadastro"><u>cadastre-se</u></Link>
            </div>
            {erro && <div className='erro-form'>
                <span>{erro}</span>
            </div>}

        </div>
    );
};
