import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* About Section */}
            <div className="text-center mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#fdc259' }}>Tentang Kami</h3>
              <p className="text-sm">
                Website ini dikelola oleh Media Komunikasi dan Informasi IMADIBA.
              </p>
            </div>

            {/* Logo and Cabinet Name in the Center */}
            <div className="flex items-center justify-center mb-6 md:mb-0 md:flex-shrink-0 md:w-1/3">
              <img src="/arahpulang.png" alt="Logo Arah Pulang" className="h-16 mr-4" />
              <h1 className="text-2xl font-bold">ARAH PULANG</h1>
            </div>

            {/* Contact Section */}
            <div className="text-center md:w-1/3">
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#fdc259' }}>Kontak</h3>
              <p className="text-sm">
                <a href="https://www.instagram.com/officialimadiba/" className="underline hover:text-yellow-400">
                  @officialimadiba
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Copyright Section */}
          <div className="mt-6 border-t pt-4 text-center">
            <p className="text-xs">
              © {new Date().getFullYear()} Ikatan Mahasiswa Diponegoro Batang. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
