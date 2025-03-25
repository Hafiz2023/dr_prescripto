import Doctors from "./Doctors/page";
import Footer from "./Footer/page";
import Hero from "./Hero/page";
import Navbar from "./Navbar/page";
import Speciality from "./Speciality/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Speciality />
      <Doctors />
    </div>
  );
}
