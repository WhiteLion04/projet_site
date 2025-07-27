import "react";


function Blog () {
    const Blog = [
        {
            titre:"Créer une société coopérative au Cameroun",
            informations: "par Christian Tchamadeu | Nov 28, 2022",
            descriptions: "La société coopérative est un groupement autonome de personnes volontairement réunies pour satisfaire leurs aspirations et besoins économiques, sociaux et culturels communs, au moyen d’une entreprise dont la propriété et la gestion sont collectives et où le pouvoir...",
            image: "https://www.cga-brcgroup.com/parler-a-un-expert/",
            category: " Entreprise"
        },
        {
            titre:"Créer une société civile immobilière au Cameroun",
            informations: "par Christian Tchamadeu | Nov 28, 2022 ",
            descriptions: "La succursale est  un établissement secondaire, ouvert par une société mère à l'étranger, pour faciliter l'extension géographique de ses activités ainsi que ses relations avec la clientèle. Autrement dit , c' est un établissement commercial ou industriel ou de...",
            image: "https://www.cga-brcgroup.com/parler-a-un-expert/",
            category: "Uncategorized"
        },
        {
            titre:"Créer une société coopérative au Cameroun",
            informations: "par Christian Tchamadeu | Nov 28, 2022",
            descriptions: "Une SCI ou société civile immobilière est un contrat de société par lequel plusieurs personnes (les associés) décident de mettre en commun un ou plusieurs biens immobiliers afin d’en partager les bénéfices ou de profiter de l’économie qui pourrait en résulter, tout en...",
            image: "https://www.cga-brcgroup.com/parler-a-un-expert/",
            category: "Uncategorized"
        },
        {
            titre:"L’importance de la formalisation d’entreprise pour le promoteur et pour l’Etat",
            informations: "par Christian Tchamadeu | Nov 28, 2022 ",
            descriptions: "Le but affiché des initiatives de formalisation de l’entreprise consiste à créer des emplois en plus grand nombre et de meilleure qualité, à réduire la pauvreté et à remédier à la marginalisation de ceux qui sont tout particulièrement exposés aux plus graves déficits...",
            image: "https://www.cga-brcgroup.com/parler-a-un-expert/",
            category : "Entreprise"
        },
        {
            titre:"Créer une société anonyme au Cameroun",
            informations: "par Christian Tchamadeu | Nov 28, 2022 ",
            descriptions: "La S.A  (La société anonyme) est une société dans laquelle les actionnaires ne sont responsables des dettes sociales qu’à concurrence de leurs apports et dont les droits des actionnaires sont représentés par des actions. La société anonyme peut ne comprendre qu’un...",
            image: "https://www.cga-brcgroup.com/parler-a-un-expert/",
            category : "Entreprise"
        }
    ];

    return (
        <>
          <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-950 via-violet-800 to-fuchsia-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
             
              <span className="text-white/90 text-sm font-medium">BRC Blog</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Choisissez{' '}
              <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                Broad Range Consulting
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Pour l'ouverture de vos entreprises et particulier, et une bonne prise en main et suivie comptable. . .
            </p>
          </div>
        </div>
      </section>
        {/*cards pour blog*/}
            <section className="py-20">
          <div className="grid md:grid-cols-2 gap-8 sm:grid-cols-1">
            {Blog.map((blog, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:-translate-y-2"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-6">
                  <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {blog.category}
                  </span>
                </div>

                <div className="flex rounded-3xl items-start space-x-4 mb-6">
                  <img
                    src={blog.image}
                    alt={blog.titre}
                    className="w-40 h-40  object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold   text-xl mb-1 mt-2">
                     <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {blog.titre}
                  </span>
                    </h4>
                    <p className="text-neutral-600 text-sm mb-3">{blog.informations}</p>
                    <div className="flex items-center space-x-1">
                    </div>
                  </div>
                </div>

                <blockquote className="text-neutral-700 leading-relaxed italic mb-6">
                  {blog.descriptions}
                </blockquote>
                  
              </div>
            ))}
          </div>
      </section>
        
        </>
    )
}

export default Blog 