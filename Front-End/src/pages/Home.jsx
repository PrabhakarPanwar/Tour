import Hero from "../components/Hero";
import OurService from "../components/OurService";
import Parallex from "../components/Parallex";

function Home() {
  return (
    <main>
      <Hero />
      <p className="w-[40%] text-center mx-auto my-[8rem]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        obcaecati magni vel voluptas, culpa consectetur. Sunt aliquid tempore
        vitae exercitationem obcaecati cumque, nobis, itaque placeat ipsum
        libero magnam animi illo quis sequi nesciunt eveniet omnis minima
        repellat, a eius assumenda.
      </p>
      <Parallex />
      <OurService />
    </main>
  );
}

export default Home;
