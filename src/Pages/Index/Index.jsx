import "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../../Components/Nav/Header"
import Footer from '../../Components/Nav/Footer';
import A_propos from "./A_propos"



function Index() {
  return (
    <Router>
      <div className="min-h-screen flex flex-wrap bg-white">
        <Header/>
        <main className="flex-grow">
          <Routes>
            <Route path="*" element={<A_propos />}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default Index