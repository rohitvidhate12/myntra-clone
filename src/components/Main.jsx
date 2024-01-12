import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Bag from "./Bag";

const Main = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bag" element={<Bag />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Main;
