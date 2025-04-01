import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";
import { NewReleases } from "../components/NewReleases";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <NewReleases />
      <Features />
    </div>
  );
}
