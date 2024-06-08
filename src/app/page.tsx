import Hero from "./components/pages/Home/Hero";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CorePrinciples from "./components/pages/Home/CorePrinciples";
import FeaturedResources from "./components/pages/Home/FeaturedResources";
import LatestUpdates from "./components/pages/Home/LatestUpdates";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <FeaturedResources />
      <CorePrinciples />
      <LatestUpdates />
      <Footer />
    </main>
  );
}
