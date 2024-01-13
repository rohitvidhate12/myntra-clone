import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Bag from "./Bag";
import Login from "./Login/Login";
import { useSelector } from "react-redux";

const Main = () => {
  const isLoggedIn = useSelector((store) => store.registeredUsers.isLoggedIn);
  console.log(isLoggedIn);
  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Login />;
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/bag"
          element={
            <ProtectedRoute>
              <Bag />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Main;
