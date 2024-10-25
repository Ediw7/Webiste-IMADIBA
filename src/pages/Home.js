import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { ArrowRight, Award, BookOpen, Briefcase } from 'lucide-react';
import RegistrationSection from '../components/RegistrationSection'; // Sesuaikan jalur sesuai dengan lokasi file


const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    cards: false,
    updates: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const cardsSection = document.getElementById('info-cards');
      const updatesSection = document.getElementById('latest-updates');

      if (cardsSection) {
        const cardPosition = cardsSection.offsetTop - window.innerHeight + 200;
        setIsVisible(prev => ({
          ...prev,
          cards: window.scrollY > cardPosition
        }));
      }

      if (updatesSection) {
        const updatePosition = updatesSection.offsetTop - window.innerHeight + 200;
        setIsVisible(prev => ({
          ...prev,
          updates: window.scrollY > updatePosition
        }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section without Parallax */}
      <section className="relative h-screen bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden rounded-lg">
        <div className="absolute inset-0">
          <div className="bg-black opacity-50 absolute inset-0 rounded-lg"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <div className="animate-fadeIn opacity-0" style={{ animation: 'fadeIn 1s forwards' }}>
            <h1 className="text-5xl font-bold mb-2 tracking-tight">
              Ikatan Mahasiswa Diponegoro Batang
            </h1>
          </div>

          <div className="my-8 transform transition-all duration-1000 hover:scale-105">
            <img 
              src="arahpulang.png"
              alt="Logo Arah Pulang" 
              className="h-64 drop-shadow-2xl animate-float"
            />
          </div>

          <div className="space-y-4 animate-slideUp opacity-0" style={{ animation: 'slideUp 1s 0.5s forwards' }}>
            <h2 className="text-4xl font-extrabold text-white">
              KABINET ARAH PULANG
            </h2>
            <p className="text-xl font-light italic mb-6">
              "Menuju Arah, Kembali Pulang"
            </p>
          </div>
        </div>
      </section>

    {/* masukkin komponen disini */}
    <section className="py-20">
        <RegistrationSection />
      </section>


      {/* Info Cards Section with Scroll Animation */}
      <section id="info-cards" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Info Beasiswa",
                description: "Informasi lengkap tentang berbagai beasiswa untuk mahasiswa.",
                color: "blue",
                link: "/beasiswa"
              },
              {
                icon: Briefcase,
                title: "Lowongan Kerja",
                description: "Temukan peluang karir terbaik untuk alumni dan mahasiswa.",
                color: "green",
                link: "/loker"
              },
              {
                icon: Award,
                title: "Prestasi Anggota",
                description: "Pencapaian dan keberhasilan anggota yang membanggakan.",
                color: "purple",
                link: "/prestasi"
              }
            ].map((card, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible.cards 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-${card.color}-100 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-500 hover:rotate-12`}>
                    <card.icon className={`w-8 h-8 text-${card.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {card.description}
                  </p>
                  <a 
                    href={card.link} 
                    className={`text-${card.color}-600 font-semibold hover:text-${card.color}-700 flex items-center group`}
                  >
                    Lihat Info
                    <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section with Scroll Animation */}
      <section id="latest-updates" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Program Unggulan Kami
          </h2>
          <div className="w-32 h-1 bg-[#fdc259] mb-12 rounded-lg mx-auto"></div> 
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                date: "2024",
                title: "Partnership x Pendanaan Kreatif",
                description: "Deskripsi",
                image: ""
              },
              {
                date: "2024",
                title: "ALUMNI INSIGHT",
                description: "Deskripsi.",
                image: ""
              },
              {
                date: "2024",
                title: "Welcoming Party",
                description: "Deskripsi",
                image: ""
              },
              {
                date: "2024",
                title: "IMADIBA Fit & Fun",
                description: "Deskripsi",
                image: ""
              },
              {
                date: "2024",
                title: "Batang Dips Art Competition",
                description: "Deskripsi",
                image: ""
              }              
            ].map((update, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isVisible.updates 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={update.image}
                      alt={update.title}
                      className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{update.date}</div>
                    <h3 className="text-xl font-bold mb-2">{update.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {update.description}
                    </p>
                    <a href="#" className="text-[#fdc259] font-semibold hover:text-[#fdcd70] flex items-center group">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

<Footer />
    </div>
  );
};

export default Home;