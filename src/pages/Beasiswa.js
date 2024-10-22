import React from 'react';
import { Search, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

const Beasiswa = () => {
  const scholarships = [
    {
      id: 1,
      title: "Beasiswa Pemerintah Batang",
      type: "Full Scholarship",
      level: "S1",
      deadline: "31 Oktober 2024",
      description: "Beasiswa penuh untuk mahasiswa Batang berprestasi mencakup biaya kuliah dan tunjangan bulanan."
    },
    {
      id: 2,
      title: "Beasiswa LPDP",
      type: "Full Scholarship",
      level: "S2/S3",
      deadline: "15 November 2024",
      description: "Program beasiswa pascasarjana dalam dan luar negeri untuk putra-putri terbaik Banten."
    },
    {
      id: 3,
      title: "Beasiswa Bank Indonesia",
      type: "Partial Scholarship",
      level: "S1",
      deadline: "1 November 2024",
      description: "Beasiswa parsial untuk mahasiswa bidang ekonomi, teknik, dan sosial humaniora."
    },
    {
      id: 4,
      title: "Beasiswa Unggulan Kemendikbud",
      type: "Full Scholarship",
      level: "S1/S2",
      deadline: "20 Oktober 2024",
      description: "Program beasiswa unggulan dari Kemendikbud untuk mahasiswa berprestasi akademik dan non-akademik."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 text-white rounded-lg">
        <div className="container mx-auto px-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Info Beasiswa</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div> 
          <p className="text-xl text-center max-w-3xl mx-auto">
          Temukan berbagai informasi mengenai peluang beasiswa yang tersedia, mulai dari beasiswa lokal hingga internasional.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari beasiswa..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#fdc259]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {scholarships.map((scholarship) => (
              <div key={scholarship.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/4">
                    <img
                      src={`/api/placeholder/300/200`}
                      alt={scholarship.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {scholarship.type}
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                        {scholarship.level}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{scholarship.title}</h2>
                    <p className="text-gray-600 mb-4">{scholarship.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>Deadline: {scholarship.deadline}</span>
                      </div>
                      <button className="px-4 py-2 bg-[#fdc259] text-black rounded-lg font-semibold hover:bg-[#fdcd70] transition duration-300 flex items-center">
                        Detail
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
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

export default Beasiswa;