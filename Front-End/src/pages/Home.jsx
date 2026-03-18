import Feedback from "../components/Feedback";
import Hero from "../components/Hero";
import OurService from "../components/OurService";
import Parallex from "../components/Parallex";

function Home() {
  return (
    <center>
      <Hero />
      <p className="w-[50%] my-[8rem]">
        Nestled in the heart of nature, Kanata offers a serene escape where the hills whisper peace and the skies stretch endlessly. Wake up to golden sunrises, wander through lush trails, and breathe in the crisp mountain air.<span className="hidden md:flex">
          Each moment here is crafted for comfort, discovery, and quiet joy. Whether you're seeking solitude or shared laughter, Kanata wraps you in its timeless charm. Come for the views—stay for the memories that remain with you long after you leave.</span>
      </p>
      <Parallex />
      <OurService />
      <Feedback />
    </center>
  );
}

export default Home;
