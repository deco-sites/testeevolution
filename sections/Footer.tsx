export interface Props {
  telefone?: string;
  email?: string;
}

export default function Footer({ telefone, email }: Props) {
  const bandeiras =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/BANNERS_RODAPE_PAGAMENTOS.png";

  const seguranca =
    "https://evolutionnutritionlab.com.br/media/wysiwyg/seguranca.png";

  const faceIcon =
    "https://www.edigitalagency.com.au/wp-content/uploads/facebook-icon-white-png.png";
  const instaIcon =
    "https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png";
  const ytIcon = "https://clipart-library.com/images/dc4LABqni.png";

  return (
    <footer class="
            flex
            flex-col 
            items-center 
            w-full
        ">
      <div class="
            bg-black 
            w-full 
            text-white 
            p-8
            flex
            flex-col
            items-center
            text-center
            space-y-4
            lg:flex-row
            lg: justify-between
            lg:text-left
            lg:h-96
        ">
        <div>
          <h3 class="font-bold text-2xl">Institucional</h3>
          <ul>
            <li>Quem Somos</li>
            <li>Política de Privacidade</li>
            <li>Rastreamento</li>
            <li>Trocas e Devoluções</li>
            <li>Cupons</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-2xl">Fale conosco</h3>
          <p class="font-bold text-2xl">{telefone}</p>
          <p>{email}</p>
        </div>
        <div class="space-y-4">
          <h3 class="font-bold text-2xl">Formas de pagamento</h3>
          <img class="" src={bandeiras} />
          <div className="flex flex-col items-center space-y-3">
            <h3 class="font-bold text-2xl">Segurança</h3>
            <img src={seguranca} />
          </div>
        </div>
        <div class="flex flex-col items-center space-y-4">
          <h3 class="font-bold text-2xl">Redes Sociais</h3>
          <div class="flex space-x-4">
            <img class="w-6" src={faceIcon} />
            <img class="w-6" src={instaIcon} />
            <img class="w-6" src={ytIcon} />
          </div>
        </div>
      </div>
      <div class="
                bg-white 
                flex 
                flex-col 
                p-8 
                w-full
                items-center
                text-center 
                space-y-4   
                lg:text-left        
            ">
        <p>
          Os preços, promoções, condições de pagamento, frete e estoque são
          válidos apenas para compras pelo site. As imagens dos produtos são
          meramente ilustrativas. Todos os preços e condições comerciais estão
          sujeitos a alteração sem aviso prévio.
        </p>
        <hr></hr>
        <div class=" 
        flex 
        flex-col
        p-8 
        space-y-6 
<<<<<<< HEAD
        md:flex-row md:items-center md:space-x-4
=======
        md:flex-row md:items-center 
>>>>>>> ac4c71cdd027a2b1a1e79ba539cd85437735c38b
        lg:items-start ">
          <p>
            Rua José Bernardo Pinto, 285 - Vila Guilherme CEP 02055-000 - CNPJ:
            10.284.393/0001-66
          </p>
          <p>
            Copyright © 2021-present Evolution Nutrition
          </p>
        </div>
      </div>
    </footer>
  );
}
