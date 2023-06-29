import { Header } from "./Header.tsx";
import Swipper from "./Swipper.tsx";
import Famosos from "./Famosos.tsx";

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
