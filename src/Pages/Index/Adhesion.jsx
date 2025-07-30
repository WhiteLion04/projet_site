import "react";

function Adhesion () {
    const achievements = [
    {
      icon: <i className="fas fa-chart-line h-8 w-8" />,
      title: "Prévention des risques fiscaux",
      description: "C’est la mission première d’un CGA, en effet l’intervention du CGA contribue à prévenir les risques fiscaux auxquels s’exposent les entreprises. En effet, les experts des CGA procèdent à une vérification systématique de la déclaration fiscale avant de faire la déclaration auprès du fisc. En réalité le CGA permet de rapprocher le contribuable de l’administration fiscale en toute confiance. Il sert d’intermédiaire entre ses adhérents et l’administration fiscale.",
    },
    {
      icon: <i className="fas fa-sliders-h h-8 w-8" />,
      title: "Aide à la gestion",
      description: "Une autre mission fondamentale des CGA consiste à assister ses adhérents en matière de gestion d’une manière générale ou spécifique selon les besoins exprimés par ceux-ci.",
    }
  ];

  const features = [
    {
      title: "Assistance administrative permanente",
      description: "L’adhérent du CGA bénéficie d’une assistance permanente dans l’accomplissement des formalités administratives :",
      details: ["Un appui permanent en matière de formation et de conseil en gestion;", "Un soutien dans les démarches et le suivi des procédures administratives", "Une assistance permanente d’un inspecteur des impôts dans le suivi de leurs obligations fiscales et dans les programmes de formation relatifs à la fiscalité organisés par le CGA."],
    },
    {
      title: "Suivi dans la gestion et la tenue de la comptabilité",
      description: "Le CGA offre une assistance dans :",
      details: ["La tenue de la comptabilité par les professionnels ;", "Le montage et l’établissement des états financiers ;", " Le conseil juridique et fiscal."],
    },
    {
      title: "Suivi dans la gestion et la tenue de la comptabilité",
      description: "Le CGA offre des formations dans les domaines divers tels que :",
      details: ["Comprendre la loi de finances ;", "Comprendre les différents régimes fiscaux ;", "Comment calculer les coûts ;", "Comment améliorer son chiffre d’affaires ;", "Comment conquérir de nouveaux marchés." ],
    },
    {
      title: "Les Avantages fiscaux d’un adhérent du CGA",
      description: "L’adhésion à un CGA donne au membre des avantages de nature fiscale, notamment : 1.Une réduction substantielle de la base imposable à l’impôt sur le résultat consistant à :",
      details: ["Un abattement de 50% sur le bénéfice déclaré ;", "50% d’abattement sur le précompte sur achat (pour les distributeurs de produits de boissons alcoolisées et non alcoolisées)", "Exonération de l’impôt retenu sur salaire lors de l’emploi pour la première fois d’un employé salarié ;"],
    },
    {
      title: "Les Avantages fiscaux d’un adhérent du CGA",
      description: "2. L’appui dans la gestion de leurs obligations fiscales à savoir :",
      details: [" La révision de leurs obligations fiscales réalisée par l’expert en fiscalité du CGA ;", " L’appui dans la réalisation des déclarations fiscales et le paiement des versements spontanés ;", "Le conseil fiscal de l’expert en fiscalité du CGA et de l’inspecteur assistant du CGA."],
    },
    {
      title: "Facilitation d’accès au financement",
      description: "L’adhésion au CGA rassure quant aux performances de l’entreprise membre et peut faciliter l’accès au crédit si le membre en fait la demande. Il a l’avantage de se faire assister dans le montage du dossier par les experts du CGA.",
      details: [],
    }
  ];

    return (
        <>
            <section className=" h-screen bg-white py-[12%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span>Overview</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral/80 mb-6">
                  Qu’est ce qu’un {' '}
                  <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
                    centre de gestion agréée CGA 
                  </span>
                  {' '}au Cameroun?
                </h2>
              </div>
              
              <div className="space-y-6 text-xl text-neutral leading-relaxed">
                <p>
                  Une structure d’accompagnement des petites et moyennes entreprises vers la croissance.
                  Un centre de gestion agréé (CGA) est une structure associative créée par des experts comptables, une chambre de métiers ou consulaire ou encore une organisation professionnelle.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Centre-Gestion-Agreee-CGA-au-Cameroun.jpg"
                  alt="Overview"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-8 -right-7 bg-white p-3 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-purple-950 via-purple-800 to-fuchsia-800 p-3 rounded-xl">
                   <i className="fas fa-star h-5 w-5 mx-auto text-white"></i>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neutral-900">200+ entrprises</div>
                    <div className="text-sm text-neutral-600">A notre CGA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Mission du cga*/}

       <section className="py-24 bg-gradient-to-br from-violet-100 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-violet-200 text-violet-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-bullseye h-4 w-4" />
              <span>Nos Mission</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Les Missions{' '}
              </span>
                du CGA au Cameroun
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
             Elles sont de deux types :
            </p>
            <p className="text-xl text-neutral-600 max-w-3xl  font-semibold mx-auto leading-relaxed">
                <i className="fas fa-arrow-circle-right h-4 w-4 text-violet-600"></i>{' '}Prévenir les risques fiscaux</p>
            <p className="text-xl text-neutral-600 font-semibold max-w-3xl mx-auto leading-relaxed">
                <i className="fas fa-arrow-circle-right h-4 w-4 text-violet-600"></i>{' '}Optimiser la gestion quotidienne des petites et moyennes entreprises</p>
            <p className="text-xl text-neutral-600 pt-2 max-w-3xl mx-auto leading-relaxed">Son existence est soumise à l’obtention d’un agrément préalable du ministère des Finances, plus précisément l’administration fiscale.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white px-8 pb-5 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
              >
                
                <h3 className="text-2xl p-8 font-bold text-violet-950 mb-4">
                  <h3 className="inline bg-violet-700 rounded-lg p-2 px-auto text-white">{achievement.icon}</h3>
                    {' '}{achievement.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">99
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*Advanteges*/}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Les avantages {' '}
              <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                accordés aux adhérents
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-50 to-white p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-primary-200 hover:-translate-y-2"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-600">
                      <i className="fas fa-check-circle h-4 w-4 text-violet-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/*Services offerts par le cga*/}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.cga-brcgroup.com/wp-content/uploads/2021/01/Creation-d_entreprise-Cameroun-Broad-Range-Consulting.webp"
                  alt="Overview"
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">

                  <span className="bg-gradient-to-r from-purple-700 to-fuchsia-600 bg-clip-text text-transparent">
                   Les services offerts                   
                  </span>
                  {' '} par le CGA
                </h2>
              </div>
              
              <div className="space-y-6 text-md text-neutral-600 leading-relaxed">
                 <ul className="flex">
                    <i className="fas fa-check-circle h-4 w-4 text-violet-500 mr-2" />
                    <li className="inline items-center text-sm text-neutral-600">L’assistance fiscale permanente à travers la souscription des déclarations fiscales et les facilitations des démarches administratives;
                    </li>
                </ul>
                <ul className="flex">
                    <i className="fas fa-check-circle h-4 w-4 text-violet-500 mr-2" />
                    <li className="inline items-center text-sm text-neutral-600">L’assistance fiscale permanente à travers la souscription des déclarations fiscales et les facilitations des démarches administratives;
                    </li>
                </ul>
                <ul className="flex">
                    <i className="fas fa-check-circle h-4 w-4 text-violet-500 mr-2" />
                    <li className="inline items-center text-sm text-neutral-600">L’assistance fiscale permanente à travers la souscription des déclarations fiscales et les facilitations des démarches administratives;
                    </li>
                </ul>
                <p>
                    Ils peuvent le cas échéant assurer l’assistance en gestion et la formation continue. Par ailleurs, le CGA dispose également d’un personnel permanent qui assure l’accueil, le classement et le suivi des dossiers au quotidien, ainsi que l’information nécessaire aux adhérents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Adherer section*/}

      <section className="py-24 bg-gradient-to-br from-violet-800 to-fuchsia-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
            <span className="bg-gradient-to-r to-fuchsia-400 from-fuchsia-500 bg-clip-text text-transparent">
              Devenez adhérent au 
            </span>
            {' '}  Centre de Gestion Agréé Broad Range Consulting Group
          </h2>
          
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
           Devenir un adhérent du centre de Gestion agréé Broad Range Consulting vous permet de bénéficier de plusieurs avantages sur le plan fiscal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg ">
              Tarif d’adhésion au CGA : 50 000 FCFA par an
              <i className="fas fa-arrow-right ml-3 h-5 w-5" />
            </div>
            <button
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2  hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
              Adhérer au CGA BRC
            </button>
          </div>
        </div>
      </section>

        </>
    )
}

export default Adhesion