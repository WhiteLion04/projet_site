import "react";
import CGA_Broad_Consulting_logo from "./CGA_Broad_Consulting_logo.jpg"

function Footer () {

    return (
        <>
        
        <div className="bg-footer">
            <section className=" bg-black/60 h-[80] w-full flex flex-wrap justify-between items-start px-28 p-16">
                <div className="flex flex-col brightness-105">
                    <div className="" id="left">
                        <img src={CGA_Broad_Consulting_logo} alt="logo" height="150px" width="150px" className="shadow-sm mb-2"/>
                    </div>
                    <div>
                        <button className="border-2 border-fuchsia-800 text-white rounded-xl py-2 px-2 mt-5 hover:bg-fuchsia-700 hover:text-white hover:transition-all" href ="">Adherer au CGA</button> 
                    </div>
                    <div>
                        <button className="border-2 border-fuchsia-800 text-white rounded-xl py-2 px-2 mt-5" href ="">Nous Contacter</button> 
                    </div>
                </div>

                <div className="flex items-start flex-col " id="center">
                    <h2 className="text-white font-bold" >CONTACT</h2>
                    <a className="text-white font-bold py-3">Demander un devis</a>
                    <a className="text-white font-bold py-3" href="">Blog</a>
                    <div className="cursor-pointer pt-5">
                        <div className="w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center mr-3"><i className=" ml-2 fas fa-envelope mr-2"></i></div>
                        <a className="text-white font-bold">contact@cga-brcgroup.com</a>
                    </div>
                    <div>
                        <div className="mt-5 w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center mr-3"><i className=" ml-2 fas fa-phone mr-2"></i></div>
                        <a className="text-white font-bold">+237 699 90 21 84</a>
                        <a className="ml-2 text-white font-bold">/ +237 233 42 48 47</a>
                    </div>
                </div>
                <div className="mr-10  text-white font-bold flex flex-wrap items-start mt-2 sm:mt-0 w-52">
                    <p>Elle débute en 1994, avec Monsieur NGASSE Gabriel son fondateur, 
                    qui après son départ de TOTAL CAMEROUN où il était durant plusieurs années l’un des Managers, 
                    décide de mettre sur pied cette entreprise pour accompagner les petits entrepreneurs.
                    </p>
                </div>
                  <div className="flex flex-wrap justify-between items-start w-[50%] pr-[30%] h-[80%] pt-8">
                <div className="w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-facebook-f ml-2.5"></i>
                </div>
                <div className="w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center">
                    <i className="fab fa-instagram ml-auto mr-auto"></i>
                </div>
                <div className="w-8 h-8 bg-purple-700 text-white rounded-full inline-flex items-center">
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