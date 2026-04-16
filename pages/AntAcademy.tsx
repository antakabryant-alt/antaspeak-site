import React from 'react';
import { BookOpen, MonitorPlay, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 'anglais',
    title: 'Anglais',
    description: "Maîtrisez l'anglais pour le business.",
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
    icon: BookOpen,
    link: '#', // TODO: Paste Google Classroom link here
  },
  {
    id: 'canva',
    title: 'Canva & Design',
    description: "Créez des visuels professionnels.",
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    icon: MonitorPlay,
    link: '#', // TODO: Paste Google Classroom link here
  },
  {
    id: 'ia',
    title: 'Intelligence Artificielle',
    description: "Boostez votre productivité avec l'IA.",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles,
    link: '#', // TODO: Paste Google Classroom link here
  },
  {
    id: 'securite',
    title: 'Sécurité Internet',
    description: "Protégez vos données privées.",
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    icon: ShieldCheck,
    link: '#', // TODO: Paste Google Classroom link here
  }
];

const AntAcademy: React.FC = () => {
  return (
    <section id="antacademy" className="py-20 bg-[#0a0a0a]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Bienvenue sur <span className="text-brand-orange">AntAcademy</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Développez vos compétences avec nos formations pratiques et accessibles. 
          Rejoignez nos classes virtuelles et propulsez votre carrière.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <div key={course.id} className="glass-card rounded-2xl overflow-hidden group hover:border-brand-orange/50 transition-all duration-300 flex flex-col">
                {/* Image Placeholder */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-colors z-10"></div>
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-brand-dark/80 backdrop-blur-sm p-2 rounded-lg border border-white/10">
                    <Icon className="text-brand-orange" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-blue transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Action Button */}
                  <a 
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-brand-blue hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  >
                    Rejoindre le cours
                    <ArrowRight size={20} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AntAcademy;
