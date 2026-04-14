import React, { useState } from 'react';
import { Eye, X, MessageCircle, Info } from 'lucide-react';

interface PortfolioItem {
  id: number;
  category: "Création site web" | "Logos & Identité visuelle" | "Cartes de visite" | "Flyers & Affiches" | "CV & Documents";
  title: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  // Création site web
  {
    id: 10,
    category: "Création site web",
    title: "Cabinet Dentaire Elite",
    description: "Site Vitrine & Prise de RDV",
    image: "https://i.postimg.cc/VNBzbZdN/site_Dentaire.jpg"
  },
  {
    id: 11,
    category: "Création site web",
    title: "Clinique Sourire",
    description: "Site Web Responsive & Design",
    image: "https://i.postimg.cc/4NV4g3s6/site_cabinet_dentaire.jpg"
  },

  // Logos & Identité visuelle
  { 
    id: 1, 
    category: "Logos & Identité visuelle", 
    title: "Identité Visuelle Moderne", 
    description: "Logo & Branding – Entreprise",
    image: "https://i.postimg.cc/JzTJSTpF/2026_01_29_154610.jpg" 
  },
  { 
    id: 2, 
    category: "Logos & Identité visuelle", 
    title: "Design Minimaliste", 
    description: "Identité visuelle",
    image: "https://i.postimg.cc/RZPf2Pgj/2026_01_29_151756.jpg" 
  },

  // Cartes de visite
  { 
    id: 3, 
    category: "Cartes de visite", 
    title: "Carte VIP", 
    description: "",
    image: "https://i.postimg.cc/CLf7gp33/Salford_Co.png" 
  },
  { 
    id: 4, 
    category: "Cartes de visite", 
    title: "G FORCE Security", 
    description: "Carte de visite – Agence de Sécurité",
    image: "https://i.postimg.cc/hP7sBRk5/richard_gforce_com.png" 
  },

  // Flyers & Affiches
  { 
    id: 5, 
    category: "Flyers & Affiches", 
    title: "Service de Nettoyage", 
    description: "Flyer promotionnel – Services Ménagers",
    image: "https://i.postimg.cc/Z5tcYDmQ/Blue_And_White_Modern_Cleaning_Service_Flyer.png" 
  },
  { 
    id: 6, 
    category: "Flyers & Affiches", 
    title: "Nous créons ce que vous voulez", 
    description: "",
    image: "https://i.postimg.cc/yYSjHzqC/Orange_and_Navy_Modern_Roofing_Services_Poster_Landscape_(2).png" 
  },
  { 
    id: 8, 
    category: "Flyers & Affiches", 
    title: "Vos évènements, nos créations", 
    description: "",
    image: "https://i.postimg.cc/J4BxLCfS/Untitled_design1.png" 
  },
  { 
    id: 9, 
    category: "Flyers & Affiches", 
    title: "Votre affiche est prête", 
    description: "",
    image: "https://i.postimg.cc/GhmS1pn2/Black_and_Light_Blue_Digital_Marketing_Agency_Flyer.png" 
  },

  // CV & Documents
  { 
    id: 7, 
    category: "CV & Documents", 
    title: "CV Professionnel Simple", 
    description: "Mise en page – Profil Cadre",
    image: "https://i.postimg.cc/3x5Brbh6/Expérience_professionnelle.png" 
  }
];

const categories = ["Tous", "Création site web", "Logos & Identité visuelle", "Cartes de visite", "Flyers & Affiches", "CV & Documents"];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState("Tous");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === "Tous" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="bg-brand-dark min-h-screen pt-24 pb-12 font-sans text-white">
      <div className="container mx-auto px-6">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Nos Réalisations</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            La preuve par l'image. Découvrez la qualité de nos créations pour le marché guinéen.
          </p>
        </div>

        {/* Filtres (Scroll horizontal sur mobile) */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap justify-start md:justify-center gap-3 mb-8 no-scrollbar px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                filter === cat 
                  ? 'bg-brand-orange text-white border-brand-orange shadow-lg' 
                  : 'bg-transparent border-gray-700 text-gray-400 hover:border-white hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Description contextuelle pour CV & Documents */}
        {filter === "CV & Documents" && (
          <div className="max-w-7xl mx-auto mb-10 px-2 animate-fade-in-up">
            <div className="bg-[#0f172a] border border-dashed border-gray-700 rounded-xl p-4 flex items-start sm:items-center gap-3 shadow-sm">
                <Info className="text-brand-blue shrink-0 mt-0.5 sm:mt-0" size={20} />
                <p className="text-sm text-gray-400">
                    <span className="text-white font-semibold">Service complet :</span> En plus des CV, nous réalisons également vos <span className="text-white">lettres de motivation</span>, <span className="text-white">documents administratifs</span> et <span className="text-white">supports professionnels</span> sur mesure.
                </p>
            </div>
          </div>
        )}

        {/* Grille Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setSelectedImage(item.image)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#0f172a] border border-gray-800 hover:border-brand-blue/50 transition-all duration-300 shadow-xl mb-4">
                 <div className="aspect-[4/3] w-full overflow-hidden bg-gray-900/50 flex items-center justify-center p-2">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-contain sharp-image transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                 </div>
                 {/* Hover Overlay Icon */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <Eye size={24} />
                    </div>
                 </div>
              </div>

              {/* Text Description Below Image */}
              <div className="px-2">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                {item.description && (
                  <p className="text-sm text-gray-400 font-medium">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pied de page confiance & CTA */}
        <div className="text-center bg-[#0f172a] border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-4">Un projet en tête ?</h3>
          <p className="text-gray-400 mb-8">
            D’autres projets sont en cours. Contactez-nous pour découvrir plus de réalisations ou lancer votre projet.
          </p>
          <a 
            href="https://wa.me/66853673624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-brand-whatsapp hover:bg-brand-whatsappHover text-white font-bold rounded-lg transition-all shadow-lg gap-2"
          >
            <MessageCircle size={20} />
            Discuter sur WhatsApp
          </a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/10 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Aperçu plein écran" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl sharp-image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;