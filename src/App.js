import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import Technologies from './components/Technologies/Technologies';
import Detail from './components/Details/Detail';
import Facts from './components/Facts/Facts';
import Team from './components/Team/Team';
import Price from './components/Price/Price';
import Work from './components/Working/Work';
import Features from './components/Features/Features';
import CeoCard from './components/CEOCard/CeoCard';
import Blogs from './components/Blogs/Blogs';
import ContactUS from './components/ContactUs/ContactUS';
import Footer from './components/Footer/Footer';
AOS.init();
function App() {
  return (
    <div className="App">
      <Navbar />
       <Home />
       <About />
       <Slider />
       <Technologies />
       <Detail />
       <Facts />
       <Team />
       <Work />
      <Price />
       <Features />
       <CeoCard />
       <Blogs />
       <ContactUS />
       <Footer />
    </div>
  );
}

export default App;
