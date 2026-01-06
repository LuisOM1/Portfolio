import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import {ThemeContextProvider} from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
