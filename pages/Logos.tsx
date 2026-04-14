import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const logoImages = [
  "https://i.postimg.cc/X7yZDw1k/2.jpg",
  "https://i.postimg.cc/V6V6K6qv/3.jpg",
  "https://i.postimg.cc/BvZHyjKn/5.jpg",
  "https://i.postimg.cc/CKvkVwGQ/6.jpg",
  "https://i.postimg.cc/3Rdp8z9v/7.jpg"
];

const Logos: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour aux services
        </Link>
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Logos & Identité Visuelle</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Découvrez nos dernières créations. Nous donnons vie à votre marque avec des designs uniques et mémorables.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {logoImages.map((img, index) => (
            <div key={index} className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-[#0f172a] shadow-2xl">
                <div className="aspect-square overflow-hidden bg-gray-900">
                    <img 
                        src={img} 
                        alt={`Logo Design ${index + 1}`} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm bg-white/10">
                        Voir le détail
                    </span>
                </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-[#0f172a] border border-gray-800 rounded-3xl p-10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Convaincu ? Créons le vôtre.</h3>
            <p className="text-gray-400 mb-8">Un logo professionnel est le premier pas vers une marque forte.</p>
            <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-orange/20"
            >
                Commencer mon projet
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Logos;