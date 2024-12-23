import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router";
import './index.css'
const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
    </>
  );
};

export default App;


