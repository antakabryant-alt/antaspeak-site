import React from 'react';
import { Globe, Palette, Layout, MessageCircle, CreditCard, Mail, FileCheck } from 'lucide-react';

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <Globe size={32} className="text-brand-blue" />,
      title: "Création de sites web professionnels",
      desc: "Site vitrine, e-commerce ou landing page. Nous concevons des sites rapides, sécurisés et 100% adaptés aux smartphones."
    },
    {
      icon: <Palette size={32} className="text-brand-orange" />,
      title: "Logos & identité visuelle",
      desc: "Création de logos uniques et mémorables qui reflètent le sérieux de votre entreprise. Charte graphique complète incluse."
    },
    {
      icon: <Layout size={32} className="text-purple-500" />,
      title: "Flyers & affiches publicitaires",
      desc: "Design percutant pour vos événements, promotions ou services. Formats optimisés pour l'impression et les réseaux sociaux."
    },
    {
      icon: <CreditCard size={32} className="text-green-500" />,
      title: "Cartes de visite professionnelles",
      desc: "Laissez une bonne impression à chaque rencontre avec des cartes de visite au design moderne et épuré."
    },
    {
      icon: <Mail size={32} className="text-pink-500" />,
      title: "Invitations (mariage, événements)",
      desc: "Cartes d'invitation numériques ou à imprimer pour mariages, baptêmes, et cérémonies officielles."
    },
    {
      icon: <FileCheck size={32} className="text-yellow-500" />,
      title: "CV & documents professionnels",
      desc: "Refonte de CV pour maximiser vos chances de recrutement. Mise en page de rapports et documents administratifs."
    }
  ];

  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12 font-sans text-white">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-300 font-medium max-w-3xl mx-auto">
            Des solutions digitales claires et efficaces.
          </p>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
             Nous proposons une gamme complète de services pour digitaliser les PME et entrepreneurs en Guinée. Pas de superflu, juste l'essentiel pour votre réussite.
          </p>
        </div>

        {/* Liste des Services (Grid Textuelle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-[#0f172a] p-8 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors duration-300">
              <div className="w-14 h-14 bg-gray-900 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-gray-800">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Besoin d'un de ces services ?</h2>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/66853673624"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg gap-3"
            >
              <MessageCircle size={24} />
              Discuter sur WhatsApp
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-4">Devis gratuit et sans engagement.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;