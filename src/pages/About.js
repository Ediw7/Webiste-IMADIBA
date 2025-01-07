import React, { useEffect } from 'react';
import { Users, Target, Heart } from 'lucide-react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inisialisasi AOS dengan durasi animasi
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-white rounded-lg" data-aos="fade-down">
        <div className="container mx-auto px-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Tentang IMADIBA</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div> 
          <p className="text-xl text-center max-w-3xl mx-auto">
            Organisasi yang mewadahi mahasiswa asal Batang untuk berkembang, berkarya, dan berkontribusi bagi kemajuan daerah.
          </p>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Visi & Misi</h2>
              <div className="w-24 h-1 bg-[#fdc259] rounded-lg mb-8"></div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Target className="mr-2 text-[#fdc259]" />
                  Visi
                </h3>
                <p className="text-justify text-gray-600">
                Menjadi kompas untuk menentukan arah kembali, demi terciptanya IMADIBA yang
                inklusif, inspiratif serta andil dalam membangun Batang dan Indonesia
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Heart className="mr-2 text-[#fdc259]" />
                  Misi
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start text-justify">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#fdc259] text-justify rounded-full"></span>
                    Membangun sistem kerja yang inklusif dengan melibatkan seluruh anggota IMADIBA secara aktif dalam
                    setiap program dan kegiatan organisasi.
                  </li>
                  <li className="flex items-start text-justify">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#fdc259] text-justify rounded-full"></span>
                    Mengembangkan program-program pengabdian masyarakat yang berorientasi pada pemberdayaan dan
                    pembangunan di daerah Batang, sebagai wujud kepedulian dan tanggung jawab sosial IMADIBA
                  </li>
                  <li className="flex items-start text-justify">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#fdc259] text-justify rounded-full"></span>
                    Menjaga dan memperkuat asas kekeluargaan di IMADIBA, dengan menanamkan budaya kekeluargaan,
                    kerjasama dan berbudaya dalam setiap langkah menuju visi Bersama.
                  </li>
                  <li className="flex items-start text-justify">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#fdc259] text-justify rounded-full"></span>
                    Menciptakan lingkungan yang inspiratif dengan mendorong inovasi, sekaligus mengembangkan para
                    anggota untuk berani berkreasi dan berinovasi dalam kemajuan IMADIBA.
                  </li>
                  <li className="flex items-start text-justify">
                    <span className="w-2 h-2 mt-2 mr-2 bg-[#fdc259] text-justify rounded-full"></span>
                    Menjalin kemitraan dan hubungan yang erat dengan berbagai pihak, guna memperluas jaringan
                    kolaborasi yang strategis serta memberikan dampak positif yang berkelanjutan bagi IMADIBA.
                  </li>
                </ul>
              </div>
            </div>
            <div data-aos="zoom-in">
              <img 
                src="/arah.png"
                alt="IMADIBA Activities"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

         {/* Team Section */}
         <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-2 text-center text-black">Pengurus IMADIBA 2024/2025</h2>
          <div className="w-32 h-1 bg-[#fdc259] rounded-lg mb-12 mx-auto"></div> 

          {/* Ketua dan Wakil Ketua */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12" data-aos="zoom-in">
        {[
            { name: 'Nadifah Ramadhanti', position: 'Ketua Umum', description: 'Matematika 2022', igLink: 'https://www.instagram.com/nadifaraa__/', image: '/ketua.png' },
            { name: 'M Tegar Ramadhani', position: 'Wakil Ketua', description: 'Teknik Elektro 2022', igLink: 'https://www.instagram.com/mtegar.ramadhani/', image: '/wakil.png' },
        ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
            <div className="w-32 h-32 mx-auto mb-4">
                <img
                src={member.image}  // Menggunakan properti 'image' yang berbeda untuk setiap anggota
                alt={member.name}
                className="w-full h-full rounded-lg object-cover shadow-md border border-[#7085cf]"
                />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
            <p className="pt-1 text-gray-500 italic">{member.description}</p>
            <a href={member.igLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#7085cf] hover:text-blue-600">
                <FaInstagram size={24} />
            </a>
            </div>
        ))}
        </div>

          {/* Bendahara dan Sekretaris */}
          <h3 className="text-2xl font-bold mb-2 text-center text-black">Bendahara & Sekretaris</h3>
          <div className="w-32 h-1 bg-[#fdc259] mb-10 rounded-lg mx-auto"></div> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"data-aos="zoom-in">
            {[
              { name: 'Bunga Cinta R', position: 'Bendahara 1', description: 'Agribisnis 2022',igLink: 'https://www.instagram.com/bungacintr_/',image: '/bunga.png' },
              { name: 'Syfa Nur Hidayah', position: 'Bendahara 2', description: 'Teknik Geodesi 2023',igLink: 'https://instagram.com/syfaaaa.nh/',image: '/syfa.png' },
              { name: 'Azzahra Dea P', position: 'Sekretaris 1', description: 'Agribisnis 2022',igLink: 'https://www.instagram.com/azzhrprmst/',image: '/ara.png' },
              { name: 'Nuraeni', position: 'Sekretaris 2', description: 'Agribisnis 2024',igLink: 'https://instagram.com/nrrenyy_/', image: '/nuraeni.png' },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-lg object-cover shadow-md border border-[#7085cf]"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
                <p className="pt-1 text-gray-500 italic">{member.description}</p>
                <a href={member.igLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-[#7085cf] hover:text-blue-600">
                  <FaInstagram size={24} />
                </a>
              </div>
            ))}
          </div>

          {/* Bidang Section */}
          <h3 className="text-2xl font-bold mb-2 text-center text-black">Bidang-bidang</h3>
          <div className="w-32 h-1 bg-[#fdc259] mb-10 rounded-lg mx-auto"></div> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4"data-aos="fade-down">
            {[
              { name: 'PSDM', link: '/Psdm', image: '/psdm.png', description: 'Pengembangan Sumber Daya Manusia'},
              { name: 'HUKER', link: '/Huker', image: '/huker.png', description: 'Hubungan dan Kerjasama Eksternal' },
              { name: 'EKOTIF', link: '/Ekotif', image: '/ekotif.png', description: 'Ekonomi Kreatif' },
            ].map((field, index) => (
              <Link key={index} to={field.link} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={field.image}
                    alt={field.name}
                    className="w-full h-full rounded-lg object-cover shadow-md border border-[#7085cf]"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{field.name}</h4>
                <p className="pt-1 text-gray-500 italic">{field.description}</p> 
                <button className="mt-4 bg-[#7085cf] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  Selengkapnya
                </button>
              </Link>
            ))}
          </div>

          {/* Dua bidang di bawah */}
          <div className="flex justify-center mt-8"data-aos="fade-up">
            {[
              { name: 'DIMAS', link: '/Dimas', image: '/dimas.png', description: 'Pengabdian Masyarakat' },
              { name: 'MEDKOMINFO', link: '/Medkominfo', image: '/medkom.png', description: 'Media Komunikasi dan Informasi' },
            ].map((field, index) => (
              <Link key={index} to={field.link} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300 text-center mx-2">
                <div className="w-32 h-32 mx-auto mb-4">
                  <img
                    src={field.image}
                    alt={field.name}
                    className="w-full h-full rounded-lg object-cover shadow-md border border-[#7085cf]"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-800">{field.name}</h4>
                <p className="pt-1 text-gray-500 italic">{field.description}</p>
                <button className="mt-4 bg-[#7085cf] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                  Selengkapnya
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;