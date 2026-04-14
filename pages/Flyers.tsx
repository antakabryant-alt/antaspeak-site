import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Flyers: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour aux services
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Flyers & Affiches Publicitaires</h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Vous organisez un événement ou lancez une promotion ? Nos designs captivent l'attention dès la première seconde.
                    Nous créons des visuels prêts pour l'impression et optimisés pour les réseaux sociaux (Facebook, Instagram, WhatsApp Status).
                </p>
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 mb-8">
                  <ul className="space-y-4">
                      {['Design moderne et percutant', 'Formats adaptés (Story, A4, A5)', 'Livraison rapide (24h-48h)', 'Fichiers HD prêts à imprimer'].map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                              <CheckCircle className="text-brand-orange mr-3 shrink-0" size={20} />
                              {item}
                          </li>
                      ))}
                  </ul>
                </div>
                <Link to="/contact" className="inline-block w-full sm:w-auto text-center bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                    Commander mon flyer
                </Link>
            </div>
            <div className="bg-[#0f172a] p-4 rounded-2xl border border-gray-800 shadow-2xl">
                <img 
                    src="https://i.postimg.cc/FzSXXVqM/foire-agricole.png" 
                    alt="Exemple Flyer" 
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>
        </div>
      </div>
    </div>
  );
};
export default Flyers;