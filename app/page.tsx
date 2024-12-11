// Install Next.js terlebih dahulu jika belum:
// npx create-next-app@latest company-profile

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Profil Perusahaan Dagang</title>
        <meta name="description" content="Profil perusahaan dagang kami." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <header className="bg-green-700 text-white py-16 text-center">
        <img 
          src="/logo-tree.png" 
          alt="Logo Perusahaan" 
          className="mx-auto mb-4 w-32 h-32"
        />
        <h1 className="text-4xl font-bold">Selamat Datang di Perusahaan Dagang Kami</h1>
        <p className="mt-4 text-lg">Mitra terpercaya untuk kebutuhan perdagangan Anda.</p>
      </header>

      {/* Informasi Perusahaan */}
      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">Tentang Kami</h2>
        <p className="text-center text-lg max-w-3xl mx-auto">
          Kami adalah perusahaan dagang yang berdedikasi untuk menyediakan produk berkualitas
          tinggi dengan layanan terbaik. Kami telah berpengalaman selama bertahun-tahun
          dalam industri perdagangan dan terus berinovasi untuk memenuhi kebutuhan pasar.
        </p>
      </section>

      {/* Informasi Umum */}
      <section className="py-16 px-8">
        <h2 className="text-2xl font-bold text-center mb-8">Informasi Umum Tentang Perdagangan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Produk Berkualitas</h3>
            <p className="mt-2">
              Kami menawarkan berbagai produk unggulan yang telah teruji kualitasnya.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Jaringan Luas</h3>
            <p className="mt-2">
              Kami memiliki jaringan distribusi yang luas untuk menjangkau berbagai daerah.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="font-bold text-lg">Layanan Profesional</h3>
            <p className="mt-2">
              Tim kami siap memberikan layanan terbaik dan solusi untuk kebutuhan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-green-700 text-white text-center">
        <p>&copy; 2024 Perusahaan Dagang. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

// Tambahkan gambar logo "logo-tree.png" ke folder public.
// Untuk styling, gunakan Tailwind CSS atau framework lain sesuai kebutuhan:
// Install Tailwind: npm install -D tailwindcss postcss autoprefixer
// Setup Tailwind: npx tailwindcss init
