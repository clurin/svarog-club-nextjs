import Disciplines from "@/components/Disciplines";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Schedule from "@/components/Schedule";

export default async function IndexPage() {

  return (
    <div>
      <Menu />
      <Intro />
      <Disciplines />
      <Schedule />
    </div>
  );
}