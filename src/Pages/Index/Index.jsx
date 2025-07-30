import "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../../Components/Nav/Header"
import Footer from '../../Components/Nav/Footer';
import A_propos from "./A_propos"
import Blog from "../../Pages/Blog"
import Contact from "../Contact.jsx"
import Services from "../Index/Nos_services.jsx"
import Adhesion from "../Index/Adhesion.jsx"



function Index() {
  return (
    <Router>
      <div className=" flex-wrap bg-white">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<A_propos />}/>
             <Route path="blog" element={<Blog />} />
             <Route path="services" element={<Services/>}/>
             <Route path="adhesion" element={<Adhesion/>}/>
              <Route path="prenez" element={<Contact/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default Index