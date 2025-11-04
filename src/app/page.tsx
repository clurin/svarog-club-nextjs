import Coaches from "@/components/Coaches";
import Disciplines from "@/components/Disciplines";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import News from "@/components/News";
import Schedule from "@/components/Schedule";

export default async function IndexPage() {

  return (
    <div>
      <div className='flex items-center justify-center w-full h-24 px-10 bg-neutral-800'>
        <p className='text-main-red text-3xl'>СВАРОГ</p>
      </div>
      <Intro />
      <Disciplines />
      <Schedule />
      <Coaches />
      <News />
      <Footer />
    </div>
  );
}