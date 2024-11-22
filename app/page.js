import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";
import ThemeProvider from "./context/ThemeProvider";

const Page = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Sections />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Page;
