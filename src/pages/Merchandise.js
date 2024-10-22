import React from 'react';
import Footer from '../components/Footer';

const merchandiseItems = [
  {
    id: 1,
    name: 'Kaos Keren',
    price: 150000,
    description: 'Kaos berkualitas tinggi dengan desain eksklusif.',
    image: 'https://via.placeholder.com/300x300', // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 2,
    name: 'Topi Stylish',
    price: 75000,
    description: 'Topi trendy untuk gaya sehari-hari.',
    image: 'https://via.placeholder.com/300x300', // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 3,
    name: 'Stiker Unik',
    price: 25000,
    description: 'Stiker dengan berbagai desain menarik.',
    image: 'https://via.placeholder.com/300x300', // Ganti dengan URL gambar yang sesuai
  },
  {
    id: 4,
    name: 'Stiker Unik',
    price: 25000,
    description: 'Stiker dengan berbagai desain menarik.',
    image: 'https://via.placeholder.com/300x300', // Ganti dengan URL gambar yang sesuai
  },
  // Tambahkan lebih banyak item sesuai kebutuhan
];

const Merchandise = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-blue-900 text-white rounded-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Merchandise Kami</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Temukan berbagai produk merchandise eksklusif kami yang dapat kamu beli.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {merchandiseItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-xl font-semibold text-[#fdc259] mt-2">
                    Rp {item.price.toLocaleString()}
                  </p>
                  <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Beli Sekarang
                  </button>
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

export default Merchandise;
