import { Header } from "./Header.tsx";
import Swipper from "./Swipper.tsx";
import Famosos from "./Famosos.tsx";

const menuIcon =
  "https://cdn.icon-icons.com/icons2/2783/PNG/512/menu_burger_icon_177188.png";

export interface Props {
  enableInspectVSCode?: boolean;
}

export default function GetStarted({ enableInspectVSCode }: Props) {
  return (
    <section>
      <Header />
      <Swipper />
      <Famosos />
    </section>
  );
}
