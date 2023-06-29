export interface ButtonSetaProps {
  right?: string;
  left?: string;
  rotate?: string;
}

const seta = "https://cdn-icons-png.flaticon.com/512/2223/2223615.png";

export default function ButtonSeta({ right, left, rotate }: ButtonSetaProps) {
  return (
    <div
      class={`bg-yellow-400 w-10 h-10 rounded-md p-1 absolute top-1/2 z-10 transform ${rotate}`}
      style={{ right: `${right}`, left: `${left}` }}
    >
      <img class={"w-12"} src={seta} />
    </div>
  );
}
