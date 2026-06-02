import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import FunFacts from "@/components/FunFacts";
import Quiz from "@/components/Quiz";
import Videos from "@/components/Videos";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Categories />
      <Featured />
      <FunFacts />
      <Quiz />
      <Videos />
      <CtaBanner />
      <Footer />
    </main>
  );
}
