import './css/main.scss';
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
        <Header></Header>
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <Newsletter></Newsletter>
    </div>
    );
}

export default App;
