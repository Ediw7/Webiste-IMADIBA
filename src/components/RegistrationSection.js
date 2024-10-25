import React, { useEffect } from 'react';
import { Calendar, ChevronRight, Users, MessageSquare, CheckCircle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const RegistrationSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const steps = [
    {
      icon: <Users size={20} />,
      date: "21-24 Oktober 2024",
      title: "Open Recruitment",
      description: "Staff IMADIBA 2024/2025",
      status: "completed"
    },
    {
      icon: <Calendar size={20} />,
      date: "25 Oktober",
      title: "Pengumuman",
      description: "Lolos Berkas & Jadwal Wawancara",
      hasButton: true,
      status: "active"
    },
    {
      icon: <MessageSquare size={20} />,
      date: "26-27 Oktober",
      title: "Wawancara",
      description: "Tahap Seleksi Kandidat",
      status: "upcoming"
    },
    {
      icon: <CheckCircle size={20} />,
      date: "29 Oktober",
      title: "Pengumuman Akhir",
      description: "Staff IMADIBA 2024/2025",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-2" data-aos="fade-up">
            Informasi Pendaftaran
          </h2>
          <div className="w-32 h-1 bg-[#fdc259] mb-4 rounded-lg mx-auto" data-aos="fade-up" data-aos-delay="200"></div> 
          <p className="text-gray-600 text-base" data-aos="fade-up" data-aos-delay="400">
            Timeline pendaftaran Staff IMADIBA periode 2024/2025
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 -translate-y-1/2 z-0">
              <div className="h-full bg-blue-900" style={{ width: '25%' }}></div>
            </div>

            {/* Steps */}
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center z-10 w-full md:w-48"
                data-aos="fade-up" // Add AOS effect
                data-aos-delay={`${index * 100}`} // Staggered animation delay
              >
                {/* Step Circle */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${step.status === 'completed' ? 'bg-blue-900 text-white' : 
                    step.status === 'active' ? 'bg-blue-900 text-white' : 
                    'bg-white text-gray-400 border border-gray-300'}
                `}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="transition-all duration-300">
                  <span className={`inline-block px-3 py-0.5 text-xs font-medium mb-2 rounded
                    ${step.status === 'completed' ? 'bg-blue-50 text-blue-900' : 
                      step.status === 'active' ? 'bg-blue-50 text-blue-900' : 
                      'bg-gray-50 text-gray-600'}
                  `}>
                    {step.date}
                  </span>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                  
                  {step.hasButton && (
                    <button
                      onClick={() => window.open('https://docs.google.com/spreadsheets', '_blank')}
                      className="mt-3 inline-flex items-center gap-1 bg-blue-900 text-white px-4 py-1.5 rounded text-xs font-medium hover:bg-blue-800 transition-colors duration-200"
                    >
                      Lihat Spreadsheet
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
