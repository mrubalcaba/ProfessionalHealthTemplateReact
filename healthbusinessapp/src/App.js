import './css/main.scss';
import Hero from './components/Hero'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar>
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </Navbar>
    </div>
    );
}

export default App;
