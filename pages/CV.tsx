import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Eye } from 'lucide-react';

const CV: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour aux services
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1 bg-[#0f172a] p-4 rounded-2xl border border-gray-800 shadow-2xl">
                <img 
                    src="https://i.postimg.cc/3wNjwSBY/cv-simple-png.png" 
                    alt="Exemple CV" 
                    className="w-full h-auto rounded-xl shadow-lg bg-white"
                />
            </div>
            <div className="order-1 md:order-2">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">CV Professionnels</h1>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Ne laissez pas un CV mal présenté gâcher vos opportunités. Nous restructurons et designons votre CV pour qu'il sorte du lot auprès des recruteurs internationaux et locaux.
                </p>
                <div className="bg-[#0f172a] p-6 rounded-2xl border border-gray-800 mb-8">
                  <ul className="space-y-4">
                      {['Mise en page épurée et moderne', 'Correction orthographique incluse', 'Mise en valeur de vos compétences', 'Format PDF léger et compatible ATS'].map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                              <CheckCircle className="text-brand-orange mr-3 shrink-0" size={20} />
                              {item}
                          </li>
                      ))}
                  </ul>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="inline-block w-full sm:w-auto text-center bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                      Refaire mon CV
                  </Link>
                  <Link to="/cv-designs" className="inline-flex items-center justify-center w-full sm:w-auto text-center border border-gray-700 bg-gray-800/50 hover:bg-gray-800 text-gray-300 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors gap-2">
                      <Eye size={20} />
                      Voir des exemples
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
export default CV;