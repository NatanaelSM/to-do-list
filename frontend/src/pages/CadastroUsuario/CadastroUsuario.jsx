import { useRef, useState } from "react";
import './styles/cadastroUsuarioStyle.css';
import { cadastroUserService } from "../../services/cadastroUserService";
import { Link } from "react-router-dom";

export const CadastroUsuario = () => {
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');

    const nomeRef = useRef(null);
    const emailRef = useRef(null);
    const senhaRef = useRef(null);
    const confirmacaoSenhaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let nome = nomeRef.current.value;
            let email = emailRef.current.value;
            let senha = senhaRef.current.value;
            let confirmacaoSenha = confirmacaoSenhaRef.current.value;

            const res = await cadastroUserService(nome, email, senha, confirmacaoSenha);

            if (res.error) {
                setErro(res.msg);
            } else {
                nomeRef.current.value = '';
                emailRef.current.value = '';
                senhaRef.current.value = '';
                confirmacaoSenhaRef.current.value = '';
                setErro('');
                setSucesso('Usuário cadastrado com sucesso!')
            }

        } catch (err) {
            setErro('Erro inesperado. Tente novamente.');
        }
    };




    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit}>
                <h1 className='header-form'>Cadastro</h1>
                <div className="form-group">
                    <label htmlFor='nome'>Nome</label>
                    <input ref={nomeRef} type="text" id='nome' name='nome' required />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input ref={emailRef} type="email" id='email' name='email' required />
                </div>
                <div className="form-group">
                    <label htmlFor='senha'>Senha</label>
                    <input ref={senhaRef} type="password" id='senha' name='senha' required />
                </div>
                <div className="form-group">
                    <label htmlFor='confirmacaoSenha'>Confirmação de senha</label>
                    <input ref={confirmacaoSenhaRef} type="password" id='confirmacaoSenha' name='confirmacaoSenha' required />
                </div>
                <div className="form-group">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
            <div className='login-form'>
                <span>Já é cadastrado?</span>
                <Link to="/usuario/login" className="link-login"><u>login</u></Link>
            </div>
            {erro && <div className='erro-form'>
                <span>{erro}</span>
            </div>}
            {sucesso && <div className='sucesso-form'>
                <span>{sucesso}</span>
            </div>}
        </div>
    );
};
