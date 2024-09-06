export const Form = () => {
  return (
    <div className="w-[400px] h-[400px] border rounded-[1.5rem] shadow-custom bg-white dark:bg-[#201b2d]">
      <p className="pt-10 text-[23px] font-[700] text-[#5a4b81] flex justify-center items-center flex-col dark:text-white">
        Jovem Programador
      </p>

      <form className="flex justify-center items-center flex-col">
        <input
          type="text"
          className="w-[76%] font-[700] text-[14px] tracking-[1px] p-[10px] px-[20px] border-2 border-custom-gray rounded-[20px] outline-none box-border mb-[50px] mt-[50px] text-center font-ubuntu text-[rgb(38,50,56)] bg-dark-gray dark:text-[rgb(254,255,255)] dark:bg-soft-pink dark:placeholder:text-[rgb(254,255,255)] focus:border-light-black focus:border-2"
          placeholder="Usuário"
        />
        <input
          type="password"
          className="w-[76%] font-[700] text-[14px] tracking-[1px] p-[10px] px-[20px] border-2 border-custom-gray rounded-[20px] outline-none box-border mb-[50px] text-center font-ubuntu text-[rgb(38,50,56)] bg-dark-gray dark:text-[rgb(254,255,255)]  dark:bg-soft-pink dark:placeholder:text-[rgb(254,255,255)]"
          placeholder="Senha"
        />

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
