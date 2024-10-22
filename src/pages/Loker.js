import React from 'react';
import Footer from '../components/Footer';

const Loker = () => {
  const jobOpenings = [
    {
      title: 'Web Developer',
      company: 'Perusahaan A',
      description: 'Mencari web developer dengan pengalaman minimal 2 tahun.',
      requirements: [
        'Menguasai HTML, CSS, dan JavaScript',
        'Pengalaman dengan React',
        'Kemampuan bekerja dalam tim',
      ],
      applyLink: '/apply/web-developer', // Ganti dengan tautan ke halaman lamaran
    },
    {
      title: 'Desainer Grafis',
      company: 'Perusahaan B',
      description: 'Mencari desainer grafis yang kreatif dan inovatif.',
      requirements: [
        'Pengalaman menggunakan Adobe Creative Suite',
        'Memiliki portofolio yang baik',
        'Kemampuan komunikasi yang baik',
      ],
      applyLink: '/apply/desainer-grafis', // Ganti dengan tautan ke halaman lamaran
    },
    {
      title: 'Project Manager',
      company: 'Perusahaan C',
      description: 'Mencari project manager dengan pengalaman dalam manajemen proyek.',
      requirements: [
        'Pengalaman minimal 3 tahun dalam manajemen proyek',
        'Kemampuan analisis dan pemecahan masalah',
        'Keterampilan interpersonal yang kuat',
      ],
      applyLink: '/apply/project-manager', // Ganti dengan tautan ke halaman lamaran
    },
    // Tambahkan lowongan kerja lainnya di sini
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-blue-900 text-white rounded-lg">
        <div className="container mx-auto px-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Lowongan Kerja</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Temukan lowongan kerja terbaik dan bergabunglah dengan tim kami!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg transition-transform transform hover:scale-105 duration-300">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{job.title}</h3>
                <p className="text-gray-600">{job.company}</p>
                <p className="mt-2 text-gray-500">{job.description}</p>
                <h4 className="mt-4 font-semibold">Persyaratan:</h4>
                <ul className="list-disc list-inside text-gray-500">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
                <a 
                  href={job.applyLink} 
                  className="inline-block mt-4 bg-[#fdc259] text-white py-2 px-4 rounded hover:bg-yellow-600 transition"
                >
                  Lamar Sekarang
                </a>
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

export default Loker;
