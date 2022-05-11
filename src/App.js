import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Reviews from "./Pages/Reviews/Reviews";
import Contact from "./Pages/Shared/Footer/Contact/Contact";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
