import React from 'react';
import { Target, Heart, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        
        {/* Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <h4 className="text-brand-blue font-bold tracking-wide uppercase mb-2">Qui sommes-nous ?</h4>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Créateurs d'expériences digitales mémorables.</h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              AntaDigital est née d'une passion commune : rendre le digital accessible, beau et performant pour tous. Nous croyons que chaque projet mérite une attention particulière, qu'il s'agisse d'une start-up en lancement ou d'une entreprise établie.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Notre équipe est composée de designers, développeurs et stratèges passionnés, unis par un seul objectif : votre réussite.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 border border-white text-white font-bold rounded-lg hover:bg-white hover:text-brand-dark transition-colors">
              Rejoindre l'aventure
            </Link>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-2xl mt-8 shadow-xl" alt="Working" />
             <img src="https://images.unsplash.com/photo-1553877615-30c73165b3c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-xl" alt="Meeting" />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <ValueCard 
            icon={<Target size={32} />} 
            title="Excellence" 
            desc="Nous visons la perfection dans chaque pixel et chaque ligne de code."
          />
          <ValueCard 
            icon={<Heart size={32} />} 
            title="Passion" 
            desc="Nous aimons ce que nous faisons, et cela se reflète dans notre travail."
          />
          <ValueCard 
            icon={<Users size={32} />} 
            title="Proximité" 
            desc="Nous restons à l'écoute et disponibles pour nos clients à tout moment."
          />
          <ValueCard 
            icon={<Award size={32} />} 
            title="Innovation" 
            desc="Toujours à l'affût des dernières tendances pour vous garder en tête."
          />
        </div>

        {/* Team Section Placeholder */}
        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à collaborer avec nous ?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Que vous ayez besoin d'un site web, d'un logo ou d'une assistance virtuelle, nous sommes là pour vous.
          </p>
          <Link to="/contact" className="bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg">
            Démarrer un projet
          </Link>
        </div>

      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-[#111827] p-6 rounded-xl border-t-4 border-brand-blue hover:shadow-xl transition-all">
    <div className="text-brand-blue mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default About;