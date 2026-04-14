import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CVDesigns: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12 font-sans text-white">
      <div className="container mx-auto px-6">
        
        {/* Navigation */}
        <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Retour au portfolio
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">CV & Designs Réalisés</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Exemples de CV professionnels et supports visuels conçus pour nos clients.
          </p>
        </div>

        {/* Grid Responsive (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Item 1 */}
          <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 h-[400px] sm:h-[500px] flex items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/QMF3NbLz/Blue-And-White-Modern-Cleaning-Service-Flyer.png" 
              alt="Design CV 1" 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Item 2 */}
          <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 h-[400px] sm:h-[500px] flex items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/R0kjSxLn/cv-simple-png.png" 
              alt="CV Professionnel Simple" 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Item 3 */}
          <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 h-[400px] sm:h-[500px] flex items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/nzKwnjLy/Blue-And-White-Illustrative-Cleaning-Services-Flyer.png" 
              alt="Design CV 2" 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Item 4 */}
          <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 h-[400px] sm:h-[500px] flex items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/GhmS1pn2/Black-and-Light-Blue-Digital-Marketing-Agency-Flyer.png" 
              alt="Design Marketing" 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Item 5 */}
          <div className="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 shadow-xl hover:shadow-brand-blue/20 hover:scale-[1.02] transition-all duration-300 h-[400px] sm:h-[500px] flex items-center justify-center p-4">
            <img 
              src="https://i.postimg.cc/jd33qrsT/foire-agricole.png" 
              alt="Affiche Événementielle" 
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-lg transition-colors shadow-lg"
          >
            Commander mon design maintenant
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CVDesigns;