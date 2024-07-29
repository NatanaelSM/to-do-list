import '../styles/formStyle.css'

export const FormLogin = () => {
    return(
        <>
            <form>
                <div className="form-group">
                    <label for='usuario'>Usuário</label>
                    <input type="text" id='usuario' name='usuario' required/>
                </div>
                <div className="form-group">
                    <label for='senha'>Senha</label>
                    <input type="password" id='senha' name='senha' required/>
                </div>
                <div className="form-group">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </>
    )
}