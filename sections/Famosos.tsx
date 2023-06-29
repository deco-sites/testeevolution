import { CardFamosos } from "../components/CardFamosos/CardFamosos.tsx";
import Titles from "../components/Titles/Titles.tsx";

import ButtonSeta from "../components/ButtonSeta/ButtonSeta.tsx";

const famoso =
  "https://evolutionnutritionlab.com.br/media/influencers/Inlfu_DedeSecco.jpg";

const seta = "https://cdn-icons-png.flaticon.com/512/2223/2223615.png";

export default function Famosos() {
  return (
    <section class={"p-14"}>
      <Titles
        title="A MARCA QUERIDINHA DOS FAMOSOS"
        subTitle="Recomendada pelos maiores influencers de vida saudável do Brasil"
      />
      <div class={"w-full relative"}>
        <ButtonSeta left="15px" />
        <div class={"hidden lg:flex justify-evenly"}>
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <div class={" hidden md:flex lg:hidden flex justify-around"}>
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <div class={" md:hidden flex justify-around"}>
          <CardFamosos src={famoso} nome="Bianca Andrade" insta="bianca" />
        </div>
        <ButtonSeta right="15px" rotate={"rotate-180"} />
      </div>
    </section>
  );
}
