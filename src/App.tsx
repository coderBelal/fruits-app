import Banner from "./Components/Banner";
import BlogD from "./Components/BlogD";
import Category from "./Components/CategoryPage";

import FeatureSection from "./Components/FeatureSection";
import FeatureSection3 from "./Components/FeatureSection3";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import NewsLetter from "./Components/NewsLetter";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSection />
      <FeatureSection />
      <Banner />
      <BlogD />
      <NewsLetter />
      <FeatureSection3 />
      <Footer />
    </main>
  );
};

export default App;
