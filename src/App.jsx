import './App.css'
import Navbar from './components/Navbar';
import SectionOne from './components/Section1'; 
import SectionTwo from './components/Section2'
import SectionThree from './components/Section3'
import SectionFour from './components/Section4'
import SectionFive from './components/Section5';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navbar/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </>
   
  )
}
