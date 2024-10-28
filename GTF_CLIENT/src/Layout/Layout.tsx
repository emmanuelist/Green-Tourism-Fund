import FloatingChat from "../components/Dangling/FloatingChat";
// import Hangging_btn from "../components/Dangling/Hangging_btn";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Header/Navbar";
import Routers from "../Routes/Routers";


const Layout = () =>
{
  return (
    <>
      <Navbar />
      <main>
        <Routers />
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
};

export default Layout;