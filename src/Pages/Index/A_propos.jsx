import "react";
import "../style.css"



function About () {

const team = [
    {
      name: "Paule Diane Himsta",
      role: "CEO Juriste, Fiscaliste et Comptable",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Paule-Diane-Himsta.jpg",
    },
    {
      name: "Gottfield-fils Dinn Ngambi",
      role: "Responsable clientèle Littoral et extérieur",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Ngambi-Dinn-CGA.webp",
    },
    {
      name: "Tecou Léa",
      role: "Chef d’agence de Douala, Comptable",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Lea-Tecou.webp",     
    },
    {
      name: "Chiappi carine",
      role: "Chef d’agence de Yaoundé, DAF",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/25.jpg",
    },
    {
      name: "Eric Bieleu",
      role: "Comptable",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Mr-X.webp",
    },
    {
      name: "Djifack Nicole",
      role: "Assistante de direction, responsable formalisation d’entreprises",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/86.jpg",
    },
    {
      name: "Monthé Sylvio",
      role: "Gestionnaire, responsable CNPS",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/045.jpg",     
    },
    {
      name: "Responsable Informatique",
      role: "Juriste, chargé de contentieu fiscale",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/CGA-Mme.webp",
    },
    {
      name: "Deudjeu Alex",
      role: "Comptable",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/069.jpg",
    },
    {
      name: "Noanga Astride",
      role: "Aide comptable",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/78.jpg",
    },
    {
      name: "Augustine Tchamadeu",
      role: "Fiscaliste",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/052.jpg",     
    },
    {
      name: "Gaetan Edibe",
      role: "Gestionnaire",
      image: "https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Employe-BRC.webp",
    }
  ];

    return(
        <>
            
                <div className="bg-img">
                    <div className="flex justify-end" id="title">
                        <div className="">
                            <p className="shadow-blanc-transparent text-white font-bold pt-80 text-3xl lg:text-4xl">Centre de Gestion Agree</p>
                            <p style={{fontFamily: "'Kalnia', sans-serif"}} className="shadow-blanc-transparent text-fuchsia-600 font-extrabold pb-80 text-3xl lg:text-4xl">Broad Range Consulting Group</p>
                        </div>
                    </div>
                </div>
            
            {/*Section de la description */}
             <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-violet-100  rounded-3xl p-8 md:p-16 shadow-xl">
            <div className="gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-accent-50 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  </div>
                  <h3 className="text-3xl md:text-md font-bold text-neutral-900 mb-6"  style={{fontFamily: "'Kalnia', sans-serif"}}>
                    <span className="bg-gradient-to-r from-violet-800 to-fuchsia-800 bg-clip-text text-transparent">
                    Broad Range Consulting
                    </span>
                    {' '}pour les entrepreneurs
                  </h3>
                </div>
                
                <div className="font-bold space-y-6 text-neutral-700">
                  <div className=" bg-white p-6 rounded-2xl shadow-sm">
                    <p>
                      C’est une aventure qui dure déjà depuis plus de 20 ans. Avec pour vision d’accompagner les petits entrepreneurs, 
                    plus précisément les gérants des stations services TOTAL qui avaient des problèmes dans leur gestion.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm ">
                    <p>
                      De fit en aiguille, constatant le désarroi auquel pouvaient faire face les petits entrepreneurs. 
                    La structure devint un réel accompagnateur des TPE et PME.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <p>
                       En 2013 le personnel prends un coup de neuf, avec un nouveau CEO et une équipe plus jeune et plus dynamique: 
                    une nouvelle approche adoptée dans la relation avec sa clientèle et l’accroissement du porte-feuille clients de la boite.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm">

                    <p>
                       Aujourd’hui notre vision est toute aussi large que les problèmes des entrepreneurs sont nombreux.
                    </p>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
            {/* Team Section */}
            <section className="">
              <div className="text-center mb-20">
                      <div className="inline-flex items-center space-x-2 bg-fuchsia-300 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <i className="fas fa-user"/>
                      <span>Notre équipe</span>
                    </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                    Expertise{' '}
                    <span className="bg-gradient-to-r from-violet-950 to-fuchsia-700 bg-clip-text text-transparent">
                    d'éxception
                    </span>
                  </h2>
                  <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
                    Une équipe engagée, pragmatique et intègre
                  </p>
                </div>
                <div className="">
                    <div className="grid md:grid-cols-4 gap-8 mt-10 sm:grid-cols-2 px-5">
                        {team.map((member, index) => (
                            <div key={index} className="group">
                                <div className=" mb-8">
                                    <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 text-violet950">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 "
                                        />
                    </div>
                  
                  {/* Floating Role Badge */}
                  <div className="  left-4 right-4 bg-white p-4 rounded-2xl shadow-xl">
                    <h3 className="font-bold  text-lg text-violet-700">{member.name}</h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-fuchsia-800 `}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}     
                    </div>
                </div>
            </section>

            {/*Nos Services*/}
            <section>

            </section>
        </>
    )
}

export default About