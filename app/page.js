import NavBar from "@/components/NavBar";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import ContactUs from "@/components/ContactUs";
export default function Home() {
  return (
    <main className="relative ">
      <ImagesSliderDemo />
      <NavBar />
      <div className="mx-32">
        <ContactUs />
      </div>
    </main>
  );
}
