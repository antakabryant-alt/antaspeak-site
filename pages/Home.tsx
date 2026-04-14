import React from 'react';
import { ArrowRight, MessageCircle, Globe, Palette, FileText, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import AntAcademy from './AntAcademy';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/02Jnsqgq/Your_paragraph_text_(1).png" 
            alt="AntaDigital Branding" 
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 pt-20 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
            <span className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-wider">
              AGENCE DIGITALE PREMIUM
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Transformez votre vision en <br className="hidden md:block" />
            <span className="text-brand-blue">
              Réussite Digitale.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Experts en création de sites web, branding et stratégie digitale. 
            AntaDigital accompagne les entreprises et entrepreneurs ambitieux vers l'excellence numérique.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-brand-orange/25 flex items-center justify-center gap-2"
            >
              Découvrir nos services
              <ArrowRight size={20} />
            </Link>
            <a 
              href="https://wa.me/66853673624"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Snippet (Text Only) */}
      <section className="py-20 bg-[#050b1a]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nos Expertises</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Des solutions concrètes pour développer votre image et vos ventes en Guinée.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 hover:border-brand-blue transition-colors">
              <Globe className="text-brand-blue mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Création de sites web</h3>
              <p className="text-sm text-gray-400">Sites vitrines et e-commerce rapides.</p>
            </div>
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 hover:border-brand-orange transition-colors">
              <Palette className="text-brand-orange mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Branding & Identité</h3>
              <p className="text-sm text-gray-400">Logos et chartes graphiques uniques.</p>
            </div>
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 hover:border-purple-500 transition-colors">
              <Layers className="text-purple-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Design Graphique</h3>
              <p className="text-sm text-gray-400">Flyers, affiches et visuels réseaux sociaux.</p>
            </div>
            <div className="bg-[#0f172a] p-6 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
              <FileText className="text-green-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Documents Pro</h3>
              <p className="text-sm text-gray-400">CV modernes, cartes de visites, invitations.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center text-white font-bold bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors">
              Voir tous nos services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview (2 Images Only) */}
      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Aperçu de nos réalisations</h2>
                <p className="text-gray-400">La qualité internationale, adaptée au marché local.</p>
             </div>
             <Link to="/portfolio" className="text-brand-orange hover:text-white font-semibold flex items-center gap-2">
                Voir toutes nos réalisations <ArrowRight size={18} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-gray-800">
               <img 
                 src="https://i.postimg.cc/CLf7gp33/Salford_Co.png" 
                 alt="Salford & Co Branding" 
                 className="w-full h-64 md:h-80 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                 loading="lazy"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                 <p className="text-brand-orange text-xs font-bold uppercase mb-1">Identité Visuelle</p>
                 <h3 className="text-xl font-bold text-white">Salford & Co.</h3>
               </div>
            </div>

            {/* Project 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#0f172a] border border-gray-800">
               <img 
                 src="https://i.postimg.cc/Z5tcYDmQ/Blue_And_White_Modern_Cleaning_Service_Flyer.png" 
                 alt="Flyer Service Nettoyage" 
                 className="w-full h-64 md:h-80 object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
                 loading="lazy"
               />
               <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                 <p className="text-brand-orange text-xs font-bold uppercase mb-1">Publicité Print & Web</p>
                 <h3 className="text-xl font-bold text-white">Service de Nettoyage</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AntAcademy Section */}
      <AntAcademy />

      {/* Final CTA */}
      <section className="py-16 bg-[#0f172a] border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Prêt à lancer votre projet ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Discutez directement avec notre équipe. Devis gratuit et réponse rapide.
          </p>
          <a 
            href="https://wa.me/66853673624"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/25 gap-2"
          >
            <MessageCircle size={24} />
            Discuter sur WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;