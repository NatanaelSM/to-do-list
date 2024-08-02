import '../styles/formStyle.css'

export const FormLogin = () => {
    return (
        <div className='container-form'>
            <form className='form'>
                <h1 className='header-form'>LOGIN</h1>
                <div className="form-group">
                    <label for='usuario'>Usuário</label>
                    <input type="text" id='usuario' name='usuario' required />
                </div>
                <div className="form-group">
                    <label for='senha'>Senha</label>
                    <input type="password" id='senha' name='senha' required />
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
    )
}