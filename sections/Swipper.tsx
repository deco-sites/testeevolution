import CardSwipper from "../components/CardSwipper/CardSwipper.tsx";

export interface Props {
  title?: string;
}

export default function Swipper(props: Props) {
  const imgBanner18 =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/MicrosoftTeams-image_18_.png";

  const imgBanner15 =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/MicrosoftTeams-image_15_.png";

  const trustImg =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/home/regua-selo_2x_branco.png";

  const salesImg =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/home/regua-produtos_2x_branco.png";

  const creditImg =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/home/regua-parcelas_2x_branco.png";

  return (
    <section class={"mt-28"}>
      <div>
        <img class="rounded-md md:hidden" src={imgBanner15} alt="banner" />
      </div>
      <div>
        <img
          class="rounded-md hidden md:block"
          src={imgBanner18}
          alt="banner"
        />
      </div>
      <div class="
                bg-pink-700 
                flex 
                flex-col 
                items-center
                justify-between 
                px-4 
                py-2 
                md:flex-row 

                ">
        <CardSwipper
          src={trustImg}
          textBold="Confiança"
          textNormal="Desde 2010 no mercado"
        />
        <CardSwipper
          src={salesImg}
          textBold="Mais de 10Milhões"
          textNormal="De produtos vendidos"
        />
        <CardSwipper
          src={creditImg}
          textBold="12 vezes"
          textNormal="cartão sem juros"
        />
      </div>
    </section>
  );
}
