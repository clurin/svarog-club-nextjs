import Coaches from "@/components/Coaches";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import News from "@/components/News";
import Schedule from "@/components/Schedule";

export default async function IndexPage() {

  return (
    <div>
      <Menu />
      <Intro />
      <Disciplines />
      <Schedule />
      <Coaches />
      <News />
      <Footer />
    </div>
  );
}