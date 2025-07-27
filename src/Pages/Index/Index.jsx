import "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../../Components/Nav/Header"
import Footer from '../../Components/Nav/Footer';
import A_propos from "./A_propos"
import Blog from "../../Pages/Blog"
import Prenez_rdv from "../../Pages/Prenez_rdv"



function Index() {
  return (
    <Router>
      <div className=" flex-wrap bg-white">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<A_propos />}/>
             <Route path="blog" element={<Blog />} />
             <Route path="prenez" element={<Prenez_rdv/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default Index