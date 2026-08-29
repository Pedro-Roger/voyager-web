export function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="password">Senha</label>
        <input id="password" name="password" type="password" autoComplete="current-password" />
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}
