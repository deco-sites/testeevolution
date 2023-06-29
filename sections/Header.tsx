export interface Props {
  produtos?: string;
}

const logoImg =
  "https://evolutionnutritionlab.com.br/media/logo/websites/1/MicrosoftTeams-image_14_.png";
const lupaIcon = "https://cdn-icons-png.flaticon.com/512/2811/2811790.png";
const carIcon = "https://cdn-icons-png.flaticon.com/512/57/57451.png";
const loginIcon = "https://cdn-icons-png.flaticon.com/512/4519/4519678.png";
const menuIcon =
  "https://cdn.icon-icons.com/icons2/2783/PNG/512/menu_burger_icon_177188.png";

export default function Header({ produtos }: Props) {
  return (
    <header class={"fixed bg-white w-full top-0"}>
      <div class=" hidden md:flex bg-black px-8 py-2 text-white flex w-full space-x-80">
        <p>
          Olá{" "}
          <span class="font-bold">Visitante</span>, faça login ou cadastre-se!
        </p>
        <p>
          Atendimento: <span class="font-bold">(11)2359-6780</span>
        </p>
      </div>
      <div class=" hidden md:flex justify-around items-center space-x-8 px-10 py-3">
        <img src={logoImg} alt="" width="150px" />
        <p class="font-bold">{produtos}</p>
        <input
          class="
                    flex-1 
                    bg-gray-200 
                    p-3 
                    text-md
                    rounded-md 
                    focus: outline-none"
          type="text"
          placeholder="Pesquisa em toda loja..."
        />
        <img src={carIcon} alt="carrinho" width="40px" />
        <img src={loginIcon} alt="login" width="40px" />
      </div>
      <div class=" 
                md:hidden 
                w-full
                flex 
                justify-around 
                items-center 
                space-x-4 
                px-10 
                py-3
            ">
        <img src={menuIcon} alt="menu" width="25px" />
        <img src={lupaIcon} alt="pesquisa" width="25px" />
        <img src={logoImg} alt="logo" />
        <img src={loginIcon} alt="login" width="25px" />
        <img src={carIcon} alt="carrinho" width="25px" />
      </div>
    </header>
  );
}
