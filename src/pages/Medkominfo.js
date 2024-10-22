import React from 'react';
import Footer from '../components/Footer';
import { FaInstagram } from 'react-icons/fa';
import { ChevronLeft, ChevronRight} from 'lucide-react';

const StaffSlider = ({ members, title }) => {
  const scrollContainer = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainer.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  

  return (
    <>
      <h3 className="text-2xl font-bold mb-2 text-center text-black">{title}</h3>
      <div className="w-32 h-1 bg-[#fdc259] mb-10 rounded-lg mx-auto"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
        <div 
          ref={scrollContainer}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {members.map((member, index) => (
            <div key={index} className="flex-none w-72">
              <div className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-[#fdc259] shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="pt-1 text-gray-500 italic">{member.description}</p>
                <a href={member.igLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#fdc259] hover:text-yellow-600">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



const ProgramCard = ({ title, description }) => (
  <div className="relative bg-blue-900 rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden">
    <h4 className="text-xl text-center font-bold mb-2 text-white">{title}</h4>
    <div className="absolute inset-0 bg-white opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
      <p className="text-gray-800">{description}</p>
    </div>
  </div>
);

const Medkominfo = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-white rounded-lg" data-aos="fade-down">
        <div className="container mx-auto px-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">MEDKOMINFO</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div> 
          <p className="text-xl text-center max-w-3xl mx-auto">
            Media Komunikasi dan Informasi
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-2 text-center text-black">Kepala & Wakil Bidang</h2>
          <div className="w-32 h-1 bg-[#fdc259] rounded-lg mb-12 mx-auto"></div> 

          {/* Ketua dan Wakil Ketua */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12" data-aos="zoom-in">
            {[
              { name: 'Wirayudha Setyawan', position: 'Kepala Bidang', description: 'Teknik Perkapalan 2022', igLink: 'https://www.instagram.com/wirayudhastya/', image: '/antik.jpeg' },
              { name: 'Zhafa Nazhilla', position: 'Wakil Kepala Bidang', description: 'Agribisnis 2022', igLink: 'https://www.instagram.com/zhafanazhillaa/', image: '/tegar.jpeg' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-[#fdc259] shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="pt-1 text-gray-500 italic">{member.description}</p>
                <a href={member.igLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#fdc259] hover:text-yellow-600">
                  <FaInstagram size={24} />
                </a>
              </div>
            ))}
          </div>

          {/* Steering Committee */}
          <div className="mb-16" data-aos="zoom-in">
            <h3 className="text-2xl font-bold mb-2 text-center text-black">Steering Committee</h3>
            <div className="w-32 h-1 bg-[#fdc259] mb-10 rounded-lg mx-auto"></div> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Gatau', position: 'Gatau', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Gatau', description: 'Gatau', igLink: '', image: ''  },
                { name: 'Gatau', position: 'Gatau', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Gatau', description: 'Gatau', igLink: '', image: ''  },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
                  <div className="w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-[#fdc259] shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                  <p className="pt-1 text-gray-500 italic">{member.description}</p>
                  <a href={member.igLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#fdc259] hover:text-yellow-600">
                    <FaInstagram size={24} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Combined Staff Section */}
          <div className="mb-16" data-aos="fade-up">
            <StaffSlider 
              title="Staff"
              members={[
                // Staff Ahli
                { name: 'Gatau', position: 'Staff Ahli', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Ahli', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Ahli', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Ahli', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Ahli', description: 'Gatau', igLink: '', image: '' },
                // Staff Muda
                { name: 'Gatau', position: 'Staff Muda', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Muda', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Muda', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Muda', description: 'Gatau', igLink: '', image: '' },
                { name: 'Gatau', position: 'Staff Muda', description: 'Gatau', igLink: '', image: '' },
              ]}
            />
          </div>


           {/* Programs Section */}
           <div>
            <h2 className="text-2xl font-bold mb-2 text-center text-black">Program Kerja PSDM</h2>
            <div className="w-32 h-1 bg-[#fdc259] mb-10 rounded-lg mx-auto"></div> 
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'MADIBA Fit & Fun', description: 'deskripsi' },
                { title: 'Pendataan dan penjaringan MABA', description: 'deskripsi'},
                { title: 'pendataan Alumni', description: 'deskripsi'},
                { title: 'Sambang Wisuda', description: 'deskripsi'},
                { title: 'Makrab', description: 'deskripsi'},
                { title: 'Hut IMADIBA', description: 'deskripsi'},
              ].map((program, index) => (
                <div data-aos="zoom-in" key={index}>
                  <ProgramCard {...program} />
                </div>
              ))}
            </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};



export default Medkominfo;

