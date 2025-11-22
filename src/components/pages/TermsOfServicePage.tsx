import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

type Page = 'landing' | 'login' | 'signup' | 'terms' | 'privacy' | 'discover';

interface TermsOfServicePageProps {
  onNavigate: (page: Page) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          onClick={() => onNavigate('signup')}
          variant="ghost"
          className="mb-6 text-gray-600 dark:text-gray-400 hover:text-[#E3762B]"
        >
          <ArrowLeft className="mr-2" size={20} />
          Kembali
        </Button>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl text-gray-900 dark:text-white mb-4">
            Syarat dan Ketentuan Layanan
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Terakhir diperbarui: 21 November 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-10 shadow-lg space-y-8 border border-gray-200 dark:border-gray-700">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              1. Penerimaan Ketentuan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Selamat datang di Kualala! Dengan mengakses dan menggunakan layanan kami, kamu setuju untuk terikat oleh syarat dan ketentuan berikut. Jika kamu tidak setuju dengan ketentuan ini, mohon untuk tidak menggunakan layanan kami.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kualala adalah platform ringkasan buku berbahasa Indonesia yang menyediakan rangkuman berkualitas dari berbagai buku populer untuk membantu kamu belajar lebih efisien.
            </p>
          </section>

          {/* Usage Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              2. Hak Penggunaan Layanan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Dengan mendaftar di Kualala, kamu mendapatkan hak untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Mengakses ringkasan buku yang tersedia sesuai paket langganan kamu</li>
              <li>Membuat koleksi pribadi dan menandai buku favorit</li>
              <li>Menggunakan fitur highlight dan catatan untuk pembelajaran</li>
              <li>Mengakses konten melalui perangkat yang kamu miliki</li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              3. Tanggung Jawab Pengguna
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Sebagai pengguna Kualala, kamu setuju untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Memberikan informasi yang akurat saat pendaftaran</li>
              <li>Menjaga kerahasiaan akun dan password kamu</li>
              <li>Tidak membagikan akun dengan orang lain</li>
              <li>Tidak menyalin, mendistribusikan, atau mempublikasikan konten Kualala tanpa izin</li>
              <li>Menggunakan layanan hanya untuk keperluan pribadi dan non-komersial</li>
              <li>Tidak melakukan tindakan yang dapat merusak atau mengganggu layanan</li>
            </ul>
          </section>

          {/* Subscription & Payment */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              4. Langganan dan Pembayaran
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  4.1 Paket Langganan
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kualala menawarkan paket gratis dan premium. Paket premium memberikan akses penuh ke semua ringkasan buku dan fitur eksklusif.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  4.2 Pembayaran
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Pembayaran dilakukan di muka untuk periode langganan yang dipilih. Harga dapat berubah sewaktu-waktu dengan pemberitahuan sebelumnya.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  4.3 Pembatalan
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Kamu dapat membatalkan langganan kapan saja. Pembatalan akan berlaku pada akhir periode langganan yang sedang berjalan. Tidak ada pengembalian dana untuk periode yang sudah dibayar.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              5. Hak Kekayaan Intelektual
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Semua konten di Kualala, termasuk ringkasan buku, desain, logo, dan materi lainnya, dilindungi oleh hak cipta dan merupakan milik Kualala atau pemberi lisensi kami.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kamu tidak diperkenankan untuk menyalin, memodifikasi, mendistribusikan, atau menggunakan konten kami untuk tujuan komersial tanpa izin tertulis dari Kualala.
            </p>
          </section>

          {/* Content Disclaimer */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              6. Disclaimer Konten
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Ringkasan buku di Kualala dibuat dengan itikad baik untuk memberikan inti sari dari buku-buku asli. Namun, kami menyarankan untuk membaca buku lengkap untuk pemahaman yang lebih mendalam.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kualala tidak bertanggung jawab atas keputusan yang kamu buat berdasarkan informasi dari ringkasan buku kami.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              7. Batasan Tanggung Jawab
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kualala menyediakan layanan "sebagaimana adanya" dan tidak memberikan jaminan bahwa layanan akan selalu tersedia, bebas dari kesalahan, atau aman dari gangguan. Kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, atau konsekuensial yang timbul dari penggunaan layanan kami.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              8. Perubahan Ketentuan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kami berhak untuk mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui email atau notifikasi di platform. Penggunaan layanan yang berkelanjutan setelah perubahan berarti kamu menyetujui ketentuan yang baru.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              9. Penghentian Layanan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kami berhak untuk menangguhkan atau menghentikan akses kamu ke layanan jika kamu melanggar ketentuan ini atau menggunakan layanan dengan cara yang tidak pantas.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              10. Hubungi Kami
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jika kamu memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:
            </p>
            <div className="bg-[#FDC448]/5 dark:bg-[#FDC448]/10 rounded-xl p-6 border-l-4 border-[#E3762B]">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong> support@kualala.com
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Website:</strong> www.kualala.com
              </p>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>
            Dengan menggunakan Kualala, kamu menyatakan bahwa kamu telah membaca, memahami, dan menyetujui Syarat dan Ketentuan Layanan ini.
          </p>
        </div>
      </div>
    </div>
  );
}
