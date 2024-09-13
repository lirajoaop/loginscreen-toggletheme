export const Form = () => {
  return (
    <div className="w-[400px] h-[400px] border rounded-[1.5rem] shadow-custom bg-white dark:bg-[#201b2d]">
      <p className="pt-10 text-[23px] font-bold text-[#5a4b81] flex justify-center items-center flex-col dark:text-white">
        Jovem Programador
      </p>

      <form className="flex justify-center items-center flex-col">
        <input
          type="text"
          className="w-[76%] font-bold text-[14px] tracking-[1px] p-[10px] px-[20px] border-2 border-custom-gray rounded-[20px] outline-none box-border mb-[50px] mt-[50px] text-center font-ubuntu text-[rgb(38,50,56)] bg-dark-gray dark:text-[rgb(254,255,255)] dark:bg-soft-pink dark:placeholder:text-[rgb(254,255,255)] focus:border-light-black focus:border-2"
          placeholder="Usuário"
        />
        <input
          type="password"
          className="w-[76%] font-bold text-[14px] tracking-[1px] p-[10px] px-[20px] border-2 border-custom-gray rounded-[20px] outline-none box-border mb-[50px] text-center font-ubuntu text-[rgb(38,50,56)] bg-dark-gray dark:text-[rgb(254,255,255)]  dark:bg-soft-pink dark:placeholder:text-[rgb(254,255,255)] focus:border-light-black focus:border-2"
          placeholder="Senha"
        />

        <a
          href="#"
          className="cursor-pointer rounded-[5rem] text-white bg-[#5a4b81] w-[76%] h-[40px] flex items-center justify-center no-underline dark:bg-[#3e335c]"
        >
          Entrar
        </a>

        <p className="text-[#5a4b81] dark:text-[#9f91c5] text-[14px] font-bold tracking-[1px] mt-3 ">
          <a className="" href="#">
            Esqueceu a senha?
          </a>
        </p>
      </form>
    </div>
  );
};
