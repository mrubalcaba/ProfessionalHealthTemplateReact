import './css/main.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
    );
}

export default App;
