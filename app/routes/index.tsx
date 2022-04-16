import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
    return (
        <div className="flex flex-col bg-gradient-to-bl from-navy-blue to-white">
            <Nav />
            <div className="flex-grow relative">
                <Carousel />
                <section id="about">
                    <About />
                </section>
                <section id="services">
                    <Services />
                </section>
                <section id="team">
                    <Team />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Index;