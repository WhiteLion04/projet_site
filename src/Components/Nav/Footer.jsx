import "react";
import CGA_Broad_Consulting_logo from "./CGA_Broad_Consulting_logo.jpg"


function Footer () {

    return (
        <>
        
        <div className="bg-footer">
            <section className=" bg-black/60 h-[807] w-full flex flex-wrap justify-between items-start p-16">
                <div className="flex flex-col brightness-105 pb-5">
                    <div className="" id="left">
                        <img src={CGA_Broad_Consulting_logo} alt="logo" height="150px" width="150px" className="shadow-sm mb-2"/>
                    </div>
                    <div>
                        <button className="border-2 border-fuchsia-500 text-white rounded-xl lg:text-lg text-sm py-2 px-2 mt-5 hover:bg-purple-700 hover:border-purple-700 hover:text-white transition-all duration-300 shadow-2xl hover:scale-105" href ="">Adherer au CGA</button> 
                    </div>
                    <div>
                        <button className="bg-fuchsia- text-white rounded-xl  lg:text-lg text-sm py-2 px-2 mt-5 hover:bg-fuchsia-700 hover:text-white transition-all duration-300 shadow-2xl hover:scale-105" href ="">Nous Contacter</button> 
                    </div>
                </div>

                <div className="lg:flex lg:text-lg text-sm inline items-start flex-col " id="center">
                    <h2 className="text-white font-bold pb-3" >CONTACT</h2>
                    <a className="text-white font-bold py-3">Demander un devis</a>
                    <a className="flex blog text-white font-bold py-3" href="/blog">Blog</a>
                    <div className="cursor-pointer pt-5">
                        <div className="lg:w-8 lg:h-8 w-6 h-6 bg-purple-700 text-white rounded-full inline-flex items-center mr-3"><i className=" lg:ml-2 mr-auto ml-auto fas fa-envelope lg:mr-2 text-xs"></i></div>
                        <a className="text-white lg:text-lg text-sm font-bold">contact@cga-brcgroup.com</a>
                    </div>
                    <div>
                        <div className="mt-5 lg:w-8 lg:h-8 w-6 h-6 bg-purple-700 text-white rounded-full inline-flex items-center cursor-pointer mr-3"><i className=" lg:ml-2 fas fa-phone lg:mr-2 mr-auto ml-auto text-xs"></i></div>
                        <a className="text-white text-sm lg:text-lg font-bold">+237 699 90 21 84</a>
                        <p className="text-white font-bold lg:text-lg text-sm inline ml-3">/</p>
                        <a className="ml-2 text-white text-sm lg:text-lg font-bold"> +237 233 42 48 47</a>
                    </div>
                </div>
                <div className="mr-10  text-white text-sm lg:text-lg mt-5 font-bold flex flex-wrap items-start lg:mt-2 w-fit lg:w-52">
                    <p>Elle débute en 1994, avec Monsieur NGASSE Gabriel son fondateur, 
                    qui après son départ de TOTAL CAMEROUN où il était durant plusieurs années l’un des Managers, 
                    décide de mettre sur pied cette entreprise pour accompagner les petits entrepreneurs.
                    </p>
                </div>
                  <div className="lg:flex lg:flex-wrap lg:justify-between inline items-start lg:w-[50%] lg:pr-[30%] lg:h-[80%] pt-8">
                <div className="w-8 h-8 bg-purple-700 mr-2 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-facebook-f ml-2.5"></i>
                </div>
                <div className="w-8 h-8 bg-purple-700 mr-2 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-instagram ml-auto mr-auto"></i>
                </div>
                <div className="w-8 h-8 bg-purple-700 mr-2 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-twitter ml-auto mr-auto"></i>
                </div>
                <div className="w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-linkedin-in ml-auto mr-auto"></i>
                </div> 
            </div>
            <div className="h-1 w-[100%] bg-white mt-7"></div>
            <div className="mt-2 text-neutral-400 text-sm"><p>Copyright © Ngankeu, Limited All rights reserved</p></div>
            <div className="mt-2 text-neutral-400 text-sm"><p>@2025</p></div>
            </section>
        </div>  
        </>
    )
}

export default Footer