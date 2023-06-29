export interface CardFamososProps {
  src: string;
  nome: string;
  insta: string;
}

export default function CardFamosos({ src, nome, insta }: CardFamososProps) {
  const instaIcon = "https://cdn-icons-png.flaticon.com/512/1936/1936319.png";
  const faceIcon = "https://cdn-icons-png.flaticon.com/512/20/20673.png";

  return (
    <div class={"w-60 bg-yellow-300 relative"}>
      <img class={"w-full"} src={src} />
      <div class={"flex flex-col items-center justify-center p-8"}>
        <p class={"font-bold"}>{nome}</p>
        <p>{insta}</p>
      </div>
      <img
        src={faceIcon}
        class={"w-10 absolute"}
        style={{ bottom: "-20px", left: "80px" }}
      />
      <img
        src={instaIcon}
        class={"w-12 absolute"}
        style={{ bottom: "-24px", left: "135px" }}
      />
    </div>
  );
}
