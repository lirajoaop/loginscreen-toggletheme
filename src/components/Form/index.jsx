export const Form = () => {
  return (
    <div className="w-[400px] h-[400px] border rounded-[1.5rem] shadow-custom bg-white dark:bg-[#201b2d]">
      <p className="pt-10 text-[23px] font-[700] text-[#5a4b81] text-center dark:text-white">
        Jovem Programador
      </p>

      <form className="[form]">
        <input type="text" className="[username]" placeholder="Usuário" />
        <input type="password" className="[password]" placeholder="Senha" />

        <a href="#" className="[submit]">
          Entrar
        </a>

        <p className="[forgot]">
          <a href="#">Esqueceu a senha?</a>
        </p>
      </form>
    </div>
  );
};
