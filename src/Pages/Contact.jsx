import "react";
import { useState } from "react";

function Prenez () {
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async function (e) {
    e.preventDefault();
    setIsLoading(true);
   // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    return (
      <>
             <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-violet-950 via-violet-800 to-fuchsia-900 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">

                <span className="text-white/90 text-sm font-medium">Broad Range Consulting</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                Contactez{' '}
                <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Nous
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                pour une Consultation ou une Orientation en formalisation d’entreprises.
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg ">
              Pour
              Tarif /Heures : 20 000 FCFA 
            </div>

          </div>
          </div>
        </section>
       <section className="py-24 bg-gradient-to-br from-fuchsia-100 to-white" href="">
        <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="mb-8 ml-80">
                  <div className="inline-flex items-center space-x-2 bg-purple-200 text-purple-600 px-4 py-2 rounded-full ml-40 text-sm font-medium mb-6">
                    <i className="fas fa-paper-plane h-4 w-4" />
                    <span>Formulaire de contact</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                    <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent ml-32">
                       Contactez{' '}Nous
                    </span>
                  </h2>
                  <p className="text-lg text-neutral-600">
                    Remplissez ce formulaire et notre équipe vous recontactera dans les 24h.
                  </p>
                </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-100">
                
                
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start space-x-4">
                    <i className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h4>
                      <p className="text-green-700 text-sm">
                        Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none transition-all duration-300 text-lg"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none transition-all duration-300 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none transition-all duration-300 text-lg"
                        placeholder="+237 000 000 000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-700 mb-3">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none transition-all duration-300 text-lg"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border border-neutral-300 rounded-xl focus:outline-none transition-all duration-300 resize-none text-lg"
                      placeholder="Ecrivez votre message . . ."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <i className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

           <section className="relative flex items-center justify-center bg-gradient-to-br from-violet-800  to-fuchsia-800 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                <h1 className="text-xl md:text-2xl font-bold text-white leading-tight py-4">Prendre Rendez-Vous</h1>
                    <i className="h-4 w-4 fas fa-arrow-right text-white pt-6"/>
            <div className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg ">
              Tarif /Heures : 20 000 FCFA 
            </div>
          </div>
          </div>
        </section>
      </>
    );
  }

export default Prenez