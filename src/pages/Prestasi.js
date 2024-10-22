import React from 'react';
import Footer from '../components/Footer';

const Prestasi = () => {
  const achievements = [
    {
      name: 'Wirayudha Setyawan',
      position: 'Kepala Bidang',
      achievement: 'Juara I Lomba Perkapalan 2023',
      image: '/antik.jpeg',
    },
    {
      name: 'Zhafa Nazhilla',
      position: 'Wakil Kepala Bidang',
      achievement: 'Best Speaker 2023',
      image: '/tegar.jpeg',
    },
    {
      name: 'Nama Anggota Lain',
      position: 'Jabatan',
      achievement: 'Prestasi Lainnya',
      image: '/path/to/image.jpg', // Ganti dengan path gambar yang sesuai
    },
    // Tambahkan anggota dan prestasi lainnya di sini
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-blue-900 text-white rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Prestasi Anggota</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Kami bangga atas prestasi yang telah diraih oleh anggota kami.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((member, index) => (
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
                <p className="pt-1 text-gray-500 italic">{member.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Prestasi;
