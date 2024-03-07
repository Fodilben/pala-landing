import NavBar from "@/components/NavBar";
import Image from "next/image";
import { ImagesSliderDemo } from "@/components/ImageSlider";
import ContactUs from "@/components/ContactUs";
import Copyright from "@/components/Copyright";
import AboutUs from "@/components/AboutUs";
import { AccordionDemo } from "@/components/Asking";
export default function Home() {
  return (
    <main className="relative ">
      <ImagesSliderDemo />
      <NavBar />
      <div className="mx-32">
        <AboutUs />
        <AccordionDemo />
        <ContactUs />
      </div>
      <Copyright />
    </main>
  );
}
