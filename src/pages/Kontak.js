import React, { useState } from 'react';
import Footer from '../components/Footer';

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data form ke server atau proses sesuai kebutuhan
    console.log('Form submitted:', formData);
    // Reset form setelah pengiriman
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-center">Kontak Kami</h1>
          <div className="w-32 h-1 bg-[#fdc259] mb-6 rounded-lg mx-auto"></div>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Jika Anda memiliki pertanyaan, jangan ragu untuk menghubungi kami melalui formulir di bawah ini.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Hubungi Kami</h2>
              <p className="text-gray-600 mb-4">
                Anda dapat menghubungi kami melalui email atau telepon:
              </p>
              <p className="text-gray-800 font-semibold">Email: info@example.com</p>
              <p className="text-gray-800 font-semibold">Telepon: (123) 456-7890</p>
              <h3 className="text-lg font-bold mt-6">Alamat:</h3>
              <p className="text-gray-600">Jl. Contoh No. 123, Kota Contoh, Provinsi</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Formulir Kontak</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Nama:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Pesan:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg"
                    placeholder="Tulis pesan Anda"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#fdc259] text-white py-2 rounded-lg hover:bg-yellow-600 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Kontak;
