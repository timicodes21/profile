import IndexWrapper from "@/components/IndexWrapper";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Footer from "@/pages/footer/Footer";
import HomePage from "@/pages/index/HomePage";
import Work from "@/pages/work/Work";

const Home = () => {
  return (
    <>
      <HomePage />
      <IndexWrapper>
        <About />
        <Work />
        <Contact />
        <Footer />
      </IndexWrapper>
    </>
  );
};

export default Home;
