import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

type Page = 'landing' | 'login' | 'signup' | 'terms' | 'privacy' | 'discover';

interface PrivacyPolicyPageProps {
  onNavigate: (page: Page) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
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
            Kebijakan Privasi
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
              1. Pendahuluan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Di Kualala, kami sangat menghargai privasi kamu. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi kamu saat menggunakan layanan kami.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Dengan menggunakan Kualala, kamu menyetujui pengumpulan dan penggunaan informasi sesuai dengan kebijakan ini.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  2.1 Informasi yang Kamu Berikan
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Ketika kamu mendaftar dan menggunakan Kualala, kami mengumpulkan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Password (disimpan dalam bentuk terenkripsi)</li>
                  <li>Preferensi membaca dan kategori favorit</li>
                  <li>Informasi pembayaran (jika menggunakan paket premium)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                  2.2 Informasi yang Dikumpulkan Otomatis
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                  Saat kamu menggunakan layanan kami, kami secara otomatis mengumpulkan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>Riwayat pembacaan dan progress</li>
                  <li>Buku yang ditandai sebagai favorit</li>
                  <li>Koleksi yang kamu buat</li>
                  <li>Highlight dan catatan yang kamu buat</li>
                  <li>Informasi perangkat (jenis browser, sistem operasi)</li>
                  <li>Alamat IP dan data lokasi umum</li>
                  <li>Log aktivitas penggunaan</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              3. Cara Kami Menggunakan Informasi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kami menggunakan informasi yang dikumpulkan untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Menyediakan dan meningkatkan layanan Kualala</li>
              <li>Personalisasi rekomendasi buku berdasarkan preferensi kamu</li>
              <li>Mengelola akun dan langganan kamu</li>
              <li>Memproses pembayaran dengan aman</li>
              <li>Mengirim notifikasi tentang update konten baru</li>
              <li>Berkomunikasi dengan kamu tentang layanan kami</li>
              <li>Menganalisis penggunaan untuk meningkatkan pengalaman pengguna</li>
              <li>Mencegah penyalahgunaan dan aktivitas fraud</li>
              <li>Mematuhi kewajiban hukum</li>
            </ul>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              4. Berbagi Informasi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kami tidak menjual atau menyewakan informasi pribadi kamu kepada pihak ketiga. Kami hanya berbagi informasi dalam kondisi berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Penyedia Layanan:</strong> Dengan partner yang membantu kami mengoperasikan platform (payment gateway, hosting, analytics) yang terikat kontrak kerahasiaan</li>
              <li><strong>Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau untuk melindungi hak-hak kami</li>
              <li><strong>Persetujuan Kamu:</strong> Dengan izin eksplisit dari kamu</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              5. Keamanan Data
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kami mengimplementasikan berbagai langkah keamanan untuk melindungi informasi pribadi kamu:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Enkripsi data sensitif dengan SSL/TLS</li>
              <li>Password disimpan dengan hashing yang aman</li>
              <li>Akses terbatas ke data pribadi oleh staff authorized saja</li>
              <li>Monitoring reguler untuk mendeteksi aktivitas mencurigakan</li>
              <li>Backup data secara berkala</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Meskipun kami berusaha keras melindungi data kamu, tidak ada metode transmisi internet yang 100% aman. Kami tidak dapat menjamin keamanan absolut.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              6. Cookies dan Teknologi Pelacakan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kami menggunakan cookies dan teknologi serupa untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Mengingat preferensi kamu (dark mode, bahasa)</li>
              <li>Menjaga kamu tetap login</li>
              <li>Menganalisis traffic dan penggunaan website</li>
              <li>Meningkatkan performa dan pengalaman pengguna</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Kamu dapat mengatur browser kamu untuk menolak cookies, namun beberapa fitur mungkin tidak berfungsi dengan baik.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              7. Hak Kamu
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Kamu memiliki hak untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li><strong>Akses:</strong> Melihat data pribadi yang kami miliki tentang kamu</li>
              <li><strong>Perbaikan:</strong> Memperbarui atau memperbaiki informasi yang tidak akurat</li>
              <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi kamu (dengan batasan tertentu)</li>
              <li><strong>Portabilitas:</strong> Mendapatkan salinan data kamu dalam format yang dapat dibaca</li>
              <li><strong>Keberatan:</strong> Menolak pemrosesan data tertentu</li>
              <li><strong>Penarikan Persetujuan:</strong> Menarik persetujuan yang telah kamu berikan</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Untuk menggunakan hak-hak ini, silakan hubungi kami di privacy@kualala.com
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              8. Penyimpanan Data
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kami menyimpan informasi pribadi kamu selama akun kamu aktif atau selama diperlukan untuk menyediakan layanan. Jika kamu menghapus akun, data kamu akan dihapus dalam waktu 90 hari, kecuali kami diwajibkan oleh hukum untuk menyimpannya lebih lama.
            </p>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              9. Privasi Anak-Anak
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Layanan Kualala ditujukan untuk pengguna berusia 13 tahun ke atas. Kami tidak secara sengaja mengumpulkan informasi dari anak di bawah 13 tahun. Jika kami mengetahui bahwa kami telah mengumpulkan data dari anak di bawah 13 tahun, kami akan segera menghapusnya.
            </p>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              10. Perubahan Kebijakan
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui email atau notifikasi di platform. Tanggal "Terakhir diperbarui" di bagian atas akan diubah untuk mencerminkan perubahan tersebut.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl sm:text-3xl text-gray-900 dark:text-white mb-4">
              11. Hubungi Kami
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Jika kamu memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi ini, silakan hubungi kami:
            </p>
            <div className="bg-[#FDC448]/5 dark:bg-[#FDC448]/10 rounded-xl p-6 border-l-4 border-[#E3762B]">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong> privacy@kualala.com
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Support:</strong> support@kualala.com
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
            Dengan menggunakan Kualala, kamu menyatakan bahwa kamu telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.
          </p>
        </div>
      </div>
    </div>
  );
}
