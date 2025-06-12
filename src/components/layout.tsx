import Footer from "./footer";
import Widget from "@/common/widget";
import Navbars from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbars />
      {children}
      <Footer />
      <Widget />
    </>
  );
};

export default Layout;
