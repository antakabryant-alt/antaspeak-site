import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, ChevronDown } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Creation Site Web',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedService, setSubmittedService] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = new FormData(form);

    // Capture le service sélectionné avant la réinitialisation du formulaire
    const currentService = formData.service;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      if (response.ok) {
        setIsSuccess(true);
        setSubmittedService(currentService);
        setFormData({ name: '', email: '', service: 'Creation Site Web', message: '' });
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Erreur de connexion. Veuillez vérifier votre connexion internet.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Parlons de votre projet</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Prêt à passer à la vitesse supérieure ? Contactez-nous pour un devis gratuit ou une simple consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-6">
            
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 rounded-2xl text-white shadow-xl transform hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold">WhatsApp</h3>
              </div>
              <p className="mb-6 text-white/90 font-medium">Réponse immédiate. Le moyen le plus rapide de nous joindre.</p>
              <a href="https://wa.me/66853673624" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-[#128C7E] text-center font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
                Envoyer un message
              </a>
            </div>

            <div className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6">Autres moyens</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Téléphone</p>
                    <a href="tel:+66853673624" className="text-white font-semibold hover:text-brand-blue transition-colors block">+66 85 367 3624</a>
                    <p className="text-xs text-gray-500">Lun - Sam : 8h - 18h</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a href="mailto:info@antadigital.online" className="text-white font-semibold hover:text-brand-blue transition-colors block">info@antadigital.online</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-blue/10 p-3 rounded-lg text-brand-blue">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Bureaux</p>
                    <p className="text-white font-semibold">Conakry, Guinée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <div className="bg-[#0f172a] p-8 md:p-10 rounded-2xl border border-gray-800">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white">Envoyez-nous un mail</h3>
                <p className="text-gray-400">Remplissez ce formulaire et nous vous répondrons sous 24h.</p>
              </div>

              {isSuccess ? (
                <div className="text-center py-20 bg-gray-900/50 rounded-xl border border-dashed border-gray-700 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 max-w-lg mx-auto">
                    Merci ! Votre demande pour <span className="text-brand-blue">{submittedService}</span> a bien été envoyée.
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">Nous allons vous répondre par email pour récupérer vos visuels.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-6 py-3 bg-brand-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form 
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Web3Forms Access Key */}
                  <input type="hidden" name="access_key" value="6880d229-b0e1-4ca6-8d9a-28a4253ba593" />
                  
                  {/* Objet fixe pour l'email */}
                  <input type="hidden" name="subject" value="Nouvelle demande de service sur Antadigital" />
                  
                  {/* Honeypot Spam Protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Nom & Prénom</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors placeholder-gray-600"
                        placeholder="Ex: Mamadou Diallo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors placeholder-gray-600"
                        placeholder="Ex: contact@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-gray-300 mb-2">Service souhaité</label>
                    <div className="relative">
                        <select
                            id="service" 
                            name="service" 
                            value={formData.service}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors appearance-none cursor-pointer pr-12"
                        >
                            <option value="Creation Site Web">Création Site Web</option>
                            <option value="Logo & Graphisme">Logo & Graphisme</option>
                            <option value="Gestion Réseaux Sociaux">Gestion Réseaux Sociaux</option>
                            <option value="Cartes & Invitations">Cartes & Invitations</option>
                            <option value="Apprendre avec Nous">Apprendre avec Nous</option>
                            <option value="CV & Autre">CV & Autre</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <ChevronDown size={20} />
                        </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none placeholder-gray-600"
                      placeholder="Expliquez-nous ce que vous voulez réaliser..."
                    ></textarea>
                  </div>

                  <div>
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Pour nous envoyer vos modèles ou captures d'écran, nous vous répondrons par email dès réception de ce message.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;